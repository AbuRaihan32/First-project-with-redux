import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/Hooks";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const incrementHandler = (amount: number) => {
    dispatch(increment(amount));
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Counter with Redux</h1>

      <div>
        <button onClick={() => incrementHandler(1)}>increment</button>
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => incrementHandler(5)}
        >
          incrementBy 5
        </button>
      </div>
      <div style={{ marginTop: "15px", marginBottom: "15px" }}>{count}</div>
      <button onClick={decrementHandler}>decrement</button>
    </div>
  );
}

export default App;
