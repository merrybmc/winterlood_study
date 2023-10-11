import React from 'react';
import './TodoItem.css';
import { memo } from 'react';

function TodoItem({ id, isDone, content, onUpdate, onDelete }) {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className='todoItem'>
      <input type='checkbox' onChange={onChangeCheckbox} />
      <div className='content' style={{ textDecoration: isDone ? 'underline' : '' }}>
        {content}
      </div>
      <div className='date'>작성일</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
}

const OptimizedTodoItem = memo(TodoItem);

export default OptimizedTodoItem;
