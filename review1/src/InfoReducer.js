import React from 'react';
import { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

function InfoReducer() {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });
  const onChange = (e) => {
    dispatch(e.target);
  };
  return (
    <div>
      <div>
        <input type="text" name="name" onChange={onChange} value={state.name} />
        <input
          type="text"
          name="nickname"
          onChange={onChange}
          value={state.nickname}
        />
      </div>
      <div>
        <h3>name : {state.name}</h3>
        <h3>nickname : {state.nickname}</h3>
      </div>
    </div>
  );
}

export default InfoReducer;
