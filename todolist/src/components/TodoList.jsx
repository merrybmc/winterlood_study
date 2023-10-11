import React, { useMemo, useState } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onUpdate, onDelete }) {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterTodos = () => {
    if (search === '') return todos;
    return todos.filter((todo) => todo.content.includes(search));
  };

  // 최적화 안한 코드
  // const getAnalyzedTodoData = () => {
  //   console.log('TODO 분석 함수 호출');g
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo) => todo.isDone).length;
  //   const notDoneCount = totalCount - doneCount;
  //   return { totalCount, doneCount, notDoneCount };
  // };

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedTodoData();

  // useMemo 최적화
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log('TODO 분석 함수 호출');
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  return (
    <div className='todoList'>
      <h4>Todos</h4>
      <div>
        <div>전체 투두 : {totalCount}</div>
        <div>완료 투두 : {doneCount}</div>
        <div>미완료 투두 : {notDoneCount}</div>
      </div>
      <input value={search} onChange={onChangeSearch} placeholder='검색어를 입력하세요' />
      <div className='todos_wrapper'>
        {filterTodos().map((todo) => (
          <TodoItem {...todo} key={todo.id} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
