import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./component/Button";
import { CounterContext } from "./context/CounterContext";

function App() {
  const { counter, increment, decrement } = useContext(CounterContext);

  return (
    <div className="main-container">
      <div className="counter-display-section">
        <h1>Counter : {counter}</h1>
      </div>
      <div className="button-section">
        <Button handleCounter={increment}> Increment</Button>
        <Button handleCounter={decrement}>Decrement</Button>
      </div>
    </div>
  );
}

export default App;
