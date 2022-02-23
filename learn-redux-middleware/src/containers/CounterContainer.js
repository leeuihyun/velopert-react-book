import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";
import { increaseAsync, decreaseAsync } from "../modules/counter";

function CounterContainer() {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increaseAsync()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decreaseAsync()), [dispatch]);
  return (
    <Counter
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    ></Counter>
  );
}

export default CounterContainer;
