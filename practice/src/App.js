import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodosContainer from "./containers/TodosContainer";
import CounterContainer from "./containers/CounterContainer";

function App() {
  return (
    <div>
      <Header></Header>
      <CounterContainer></CounterContainer>
      <hr />
      <TodosContainer></TodosContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
