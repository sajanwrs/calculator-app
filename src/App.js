import logo from "./logo.svg";
import "./App.css";
import { useState, useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
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
      <div>
        <h1>A Simple Calculator</h1>
      </div>
      {/* <header className="App-header">A Simple Calculator</header> */}
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>minus</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={clearInput}>clear</button>
        <button onClick={clearResult}>clear result</button>
      </form>
    </div>
  );
}

export default App;
