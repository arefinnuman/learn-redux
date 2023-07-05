import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";
import { RootState } from "./redux/store";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="m-5">
      <h1>Learn Redux</h1>

      <div className="flex justify-center items-center gap-5">
        <button
          className="border-lime-500 border-2 py-5 px-2 m-5 rounded-md"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div>
          <h1>{count}</h1>
        </div>
        <button
          className="border-yellow-700 border-2 py-5 px-2 m-5 rounded-md"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="border-yellow-700 border-2 py-5 px-2 m-5 rounded-md"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment by amount
        </button>
      </div>
    </div>
  );
}

export default App;

