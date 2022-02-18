import React from 'react';
import Counter from './components/Counter';
import Todos from './components/Todos';
import TodosContainer from './containers/TodosContainer';
import CounterContainer from './containers/CounterContainer';
function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
