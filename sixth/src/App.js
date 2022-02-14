import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path="/About" component={About} />
    </div>
  );
};

export default App;
