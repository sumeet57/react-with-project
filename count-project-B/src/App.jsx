import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function addv() {
    if (count < 20) {
      setCount(count + 1);
    }
  }
  function subv() {
    if (count != 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div>
        <h1 className="text-5xl capitalize font-semibold">count : {count}</h1>
      </div>
      <div className="mt-20">
        <button
          onClick={addv}
          className="py-2 px-5 bg-slate-400 rounded-2xl m-5"
        >
          ADD
        </button>
        <button
          onClick={subv}
          className="py-2 px-5 bg-slate-400 rounded-2xl m-5"
        >
          SUB
        </button>
      </div>
    </>
  );
}

export default App;
