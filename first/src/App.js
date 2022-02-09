import MyComponent from "./MyComponent";
import react, { Component } from "react";
import Counter from "./Counter";
import EventPractice from "./EventPractice";
import Say from "./Say";
import EventPractice2 from "./EventPractice2";
import EventPractice3 from "./EventPractice3";
import ValidationSample from "./ValidationSample";
import ValidationSample2 from "./ValidationSample2";
import ScrollBox from "./ScrollBox";
class App extends Component {
  render() {
    return (
      <div>
        {/*<MyComponent name="이의현">React</MyComponent>*/}
        {/*<Counter />*/}
        {/*<Say></Say>*/}
        {/*<EventPractice />*/}
        {/*<ValidationSample2 />*/}
        <ScrollBox ref={(ref) => (this.scBox = ref)} />
        <button onClick={() => this.scBox.scrollToBottom}>Button</button>
      </div>
    );
  }
}

export default App;
