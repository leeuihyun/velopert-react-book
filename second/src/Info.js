import { useEffect, useState } from "react";

function Info() {
  const [name, setName] = useState("");
  const [nickname, setNick] = useState("");
  useEffect(() => {
    console.log("렌더링이 완료되었습니다!");
    console.log({
      name,
      nickname,
    });
  });
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNick(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Write your name"
        onChange={onChangeName}
      />

      <input
        type="text"
        placeholder="Write your nickname"
        onChange={onChangeNickname}
      />
      <div>
        <div>
          <b>이름 : {name}</b>
        </div>
        <div>
          <b>nickname : {nickname}</b>
        </div>
      </div>
    </div>
  );
}

export default Info;
