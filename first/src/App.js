import MyComponent from "./MyComponent";
import react, { Component } from "react";
import Counter from "./Counter";
import EventPractice from "./EventPractice";
import Say from "./Say";
import EventPractice2 from "./EventPractice2";
import EventPractice3 from "./EventPractice3";
class App extends Component {
  render() {
    return (
      <div>
        {/*<MyComponent name="이의현">React</MyComponent>*/}
        {/*<Counter />*/}
        {/*<Say></Say>*/}
        {/*<EventPractice />*/}
        {<EventPractice3 />}
      </div>
    );
  }
}

export default App;
