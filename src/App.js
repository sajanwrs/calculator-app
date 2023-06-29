import logo from "./logo.svg";
import "./App.css";
import { useState, useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  //setting up the result state to 0
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function multiply(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function clearInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;
  }

  function clearResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="calculator-app">
      <div className="output-section">
        {/* <p id="calc-section" ref={resultRef}>
          {result}
        </p> */}
        <div id="calc-section">123445</div>
        <div id="input-section">
          3445
          {/* <input
            id="input-section"
            pattern="[0-9]"
            ref={inputRef}
            type="number"
            placeholder="Type a number"
          /> */}
        </div>
      </div>
      <button className="span-btn" id="all-clear" onClick={clearResult}>
        AC
      </button>
      <button id="del">DEL</button>
      <button onClick={divide}>÷</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button onClick={multiply}>x</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button onClick={minus}>-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button onClick={plus}>+</button>
      <button>0</button>
      <button>.</button>
      <button className="span-btn">=</button>
    </div>
  );
}

export default App;
