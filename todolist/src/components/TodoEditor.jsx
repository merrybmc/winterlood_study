import React, { useRef, useState } from 'react';
import './TodoEditor.css';

export default function TodoEditor({ onCreate }) {
  const [content, setContent] = useState('');
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClick = () => {
    if (content === '') {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  const onKeyDownInput = (e) => {
    if (e.keyCode === 13) onClick();
  };

  return (
    <div className='todoEditor'>
      <input
        ref={inputRef}
        value={content}
        placeholder='새로운 Todo ...'
        onChange={(e) => onChangeContent(e)}
        onKeyDown={(e) => onKeyDownInput(e)}
      />
      <button onClick={onClick}>추가</button>
    </div>
  );
}
