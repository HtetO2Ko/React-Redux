import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../state/store";
import { decrement, incrementAsync } from "../state/Counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(incrementAsync(10))}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  );
};

export default Counter;
