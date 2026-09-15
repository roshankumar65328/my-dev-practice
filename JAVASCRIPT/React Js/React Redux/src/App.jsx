import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement, incrementByAmount, incrementAsync } from "./reducers/counterSlice";

function App(){

  const {value} = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
  <div className="w-full h-screen padding-box bg-zinc-300 p-2 text-center">
    <h1>Counter: {value}</h1>
    <button onClick={()=>dispatch(increment())} className="px-2 py-0 bg-blue-300 border-1 mx-3 mt-3 rounded-full">Increment</button>
    <button onClick={()=>dispatch(decrement())} className="px-2 py-0 bg-blue-300 border-1 mx-3 mt-3 rounded-full">Decrement</button>
    <button onClick={()=>dispatch(incrementByAmount(5))} className="px-2 py-0 bg-blue-300 border-1 mx-3 mt-3 rounded-full">Increment By 5</button>
    <button onClick={()=>dispatch(incrementAsync(5))} className="px-2 py-0 bg-blue-300 border-1 mx-3 mt-3 rounded-full">Increment By 5 in 2 Seconds</button>
  </div>
  )
}

export default App;

