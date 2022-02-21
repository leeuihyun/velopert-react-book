import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
/*
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
*/

function CounterContainer() {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    ></Counter>
  );
}

export default CounterContainer;
