import "./App.css";
import { useState } from "react";

function App() {
  //setting up the state
  const [inputValue, setInputValue] = useState("");

  // function plus(e) {
  //   e.preventDefault();
  //   setResult((result) => result + Number(inputRef.current.value));
  // }

  // function minus(e) {
  //   e.preventDefault();
  //   setResult((result) => result - Number(inputRef.current.value));
  // }

  // function multiply(e) {
  //   e.preventDefault();
  //   setResult((result) => result * Number(inputRef.current.value));
  // }

  // function divide(e) {
  //   e.preventDefault();
  //   setResult((result) => result / Number(inputRef.current.value));
  // }

  // function clearResult(e) {
  //   e.preventDefault();
  //   setResult(0);
  // }

  return (
    <div className="calculator-app">
      <div className="output-section">
        <div id="calc-section"></div>
        <div id="input-section">{inputValue}</div>
      </div>
      <button
        className="span-btn"
        id="all-clear"
        onClick={(event) => setInputValue("")}
      >
        AC
      </button>
      <button
        id="del"
        onClick={(event) => setInputValue(inputValue.slice(0, -1))}
      >
        DEL
      </button>
      <button
        value={" / "}
        onClick={(event) => setInputValue(inputValue + event.target.value)}
      >
        ÷
      </button>
      <button
        value={7}
        onClick={(event) => setInputValue(inputValue + event.target.value)}
      >
        7
      </button>
      <button
        value={8}
        onClick={(event) => setInputValue(inputValue + event.target.value)}
      >
        8
      </button>
      <button
        value={9}
        onClick={(event) => setInputValue(inputValue + event.target.value)}
      >
        9
      </button>
      <button
        value={"*"}
        onClick={(event) => setInputValue(inputValue + event.target.value)}
      >
        x
      </button>
      <button
        value={4}
        onClick={(event) => setInputValue(inputValue + event.target.value)}
      >
        4
      </button>
      <button
        value={5}
        onClick={(event) => setInputValue(inputValue + event.target.value)}
      >
        5
      </button>
      <button
        value={6}
        onClick={(event) => setInputValue(inputValue + event.target.value)}
      >
        6
      </button>
      <button
        value={" - "}
        onClick={(event) => setInputValue(inputValue + event.target.value)}
      >
        -
      </button>
      <button
        value={1}
        onClick={(event) => setInputValue(inputValue + event.target.value)}
      >
        1
      </button>
      <button
        value={2}
        onClick={(event) => setInputValue(inputValue + event.target.value)}
      >
        2
      </button>
      <button
        value={3}
        onClick={(event) => setInputValue(inputValue + event.target.value)}
      >
        3
      </button>
      <button
        value={" + "}
        onClick={(event) => setInputValue(inputValue + event.target.value)}
      >
        +
      </button>
      <button
        value={0}
        onClick={(event) => setInputValue(inputValue + event.target.value)}
      >
        0
      </button>
      <button
        value={" . "}
        onClick={(event) => setInputValue(inputValue + event.target.value)}
      >
        .
      </button>
      <button
        className="span-btn"
        onClick={(event) => setInputValue(eval(inputValue))}
      >
        =
      </button>
    </div>
  );
}

export default App;
