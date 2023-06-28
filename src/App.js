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
    <div className="App">
      <header className="App-header">A Simple Calculator</header>
      <div>
        <p id="calc-section" ref={resultRef}>
          {result}
        </p>
        <input
          id="input-section"
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <div id="button-section">
          <button className="span-btn" id="all-clear" onClick={clearResult}>
            AC
          </button>
          <button onClick={divide}>/</button>
          <button onClick={multiply}>X</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button onClick={minus}>-</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button onClick={plus}>+</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="span-btn">0</button>
          <button>.</button>
          <button id="equals">=</button>
          {/* 
          <button onClick={clearInput}>clear</button>
          <button onClick={clearResult}>clear result</button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
