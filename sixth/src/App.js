import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./components/About";
import Profiles from "./components/Profiles";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profiles">profiles</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profiles" component={Profiles}></Route>
    </div>
  );
};

export default App;
