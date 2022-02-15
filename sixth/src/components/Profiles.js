import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";

function profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/vanc">vanc</Link>
        </li>
        <li>
          <Link to="/profiles/lee">lee</Link>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해 주세요</div>}
      ></Route>
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default profiles;
