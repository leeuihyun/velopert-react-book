import MyComponent from "./MyComponent";
import react, { Component } from "react";
import Counter from "./Counter";
import EventPractice from "./EventPractice";
import Say from "./Say";
class App extends Component {
  render() {
    return (
      <div>
        {/*<MyComponent name="이의현">React</MyComponent>*/}
        {/*<Counter />*/}
        {/*<Say></Say>*/}
        <EventPractice />
      </div>
    );
  }
}

export default App;
