import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";
import { connect } from "react-redux";
function CounterContainer({ increase, decrease, number }) {
  return (
    <Counter
      onIncrease={increase}
      onDecrease={decrease}
      number={number}
    ></Counter>
  );
}

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainer);
