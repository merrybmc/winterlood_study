import { useCallback, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';

const mockData = [
  {
    id: 0,
    isDone: true,
    content: 'React 공부하기',
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래 널기',
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: '음악 연습하기',
    createDate: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      createDate: new Date().getTime(),
    };

    setTodos([...todos, newTodo]);
  };

  const onUpdate = useCallback((targetId) => {
    const changeTodos = todos.map((todo) =>
      todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(changeTodos);
  }, []);

  const onDelete = useCallback((targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  }, []);

  return (
    <>
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </>
  );
}

export default App;
