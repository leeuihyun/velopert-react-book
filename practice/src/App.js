import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodosContainer from "./containers/TodosContainer";
function App() {
  return (
    <div>
      <Header></Header>
      <TodosContainer></TodosContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
