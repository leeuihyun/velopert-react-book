import React from 'react';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초를 알아보자',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 익숙해지기 (scss)',
      checked: false,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들기',
      checked: true,
    },
  ]);
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
