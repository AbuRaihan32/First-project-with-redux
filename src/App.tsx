import "./App.css";
import { Button } from "./components/ui/button";
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
        <Button onClick={() => incrementHandler(1)}>increment</Button>
        <Button
          style={{ marginLeft: "10px" }}
          onClick={() => incrementHandler(5)}
        >
          incrementBy 5
        </Button>
      </div>
      <div style={{ marginTop: "15px", marginBottom: "15px" }}>{count}</div>
      <Button onClick={decrementHandler}>decrement</Button>
    </div>
  );
}

export default App;
