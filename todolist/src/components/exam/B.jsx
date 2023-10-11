import React, { useReducer } from 'react';

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case 'DECREASE':
      return (state = state - action.payload);
    case 'INCREASE':
      return (state = state + action.payload);
    default:
      return state;
  }
}

export default function B() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h4>{count}</h4>
      <h4>{count}</h4>
      <h4>{count}</h4>
      <h4>{count}</h4>
      <h4>{count}</h4>
      <h4>{count}</h4>
      <div>
        <button onClick={() => dispatch({ type: 'DECREASE', payload: 1 })}>-</button>
        <button onClick={() => dispatch({ type: 'INCREASE', payload: 1 })}>+</button>
      </div>
    </div>
  );
}
