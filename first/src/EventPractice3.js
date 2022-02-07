import { useState } from "react";

const EventPractice3 = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    let nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = (e) => {
    alert(username + ":" + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>EventHandling</h1>
      <input type="text" name="username" onChange={onChange} />
      <input
        type="text"
        name="message"
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>Button</button>
    </div>
  );
};

export default EventPractice3;
