// MADE INCREMENT AND DECREMENT COUNTER THROUGH REACT

import { useState } from "react";
import "./App.css";

function App() {

  
  const [count, set]=useState(0);
  function decrement(){
    set(count-1);
  }

  function increment(){
    set(count+1);
  }

  function resetHandler(){
    set(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center  bg-[#344151] flex-col gap-10   ">
      <div className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</div>
      <div className="flex flex-row bg-white gap-10 justify-center rounded-sm py-3 text-black text-[25px]">
        <button onClick={decrement}>-</button>
        <div>{count}</div>
        <button onClick={increment}>+</button>
      </div>
     <button className="bg-[#0398d4]" onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;
