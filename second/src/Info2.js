import React from "react";
import { useReducer } from "react";
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}
function Info2() {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nick: "",
  });

  const onChange = (e) => {
    dispatch(e.target);
  };
  return (
    <div>
      <input name="name" type="text" placeholder="name" onChange={onChange} />
      <input
        type="text"
        name="nick"
        placeholder="nickName"
        onChange={onChange}
      />
      <div>
        <div>
          <b>이름 : {state.name}</b>
        </div>
        <div>
          <b>닉네임 : {state.nick}</b>
        </div>
      </div>
    </div>
  );
}

export default Info2;
