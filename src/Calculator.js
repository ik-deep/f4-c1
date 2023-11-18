import React, { useState } from "react";

const Calculator = () => {
  const [inputVal1, setInputVal1] = useState("");
  const [inputVal2, setInputVal2] = useState("");
  const [op, setOp] = useState("");
  const [message, setMessage] = useState(false);
  const [result, setResult] = useState("");

  const handleResult = (e) => {
    setOp(e.target.value);
  };

  const calculate = () => {
    if (inputVal1 !== "" && inputVal2 !== "") {
      setResult(eval(inputVal1 + op + inputVal2));
      setMessage(true);
    } else {
      setMessage(false);
    }
  };

  console.log(inputVal1, inputVal2);

  return (
    <div className="main">
      <div className="container">
        <h1>React Calculator</h1>
        <input
          type="number"
          placeholder="Num1"
          onChange={(e) => setInputVal1(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Num2"
          onChange={(e) => setInputVal2(e.target.value)}
        ></input>
        <div className="op">
          <button
            type="button"
            className="oparator"
            onClick={handleResult}
            value="+"
            id="plush"
          >
            +
          </button>
          <button
            className="oparator"
            onClick={handleResult}
            value="-"
            id="minush"
          >
            -
          </button>
          <button
            className="oparator"
            onClick={handleResult}
            value="*"
            id="multiply"
          >
            *
          </button>
          <button
            className="oparator"
            onClick={handleResult}
            value="/"
            id="divide"
          >
            /
          </button>
        </div>
        <button type="button" className="cal" onClick={calculate}>
          Calculate
        </button>
        {message ? (
          <span style={{ color: "green",fontWeight:"bold" }}>Success!</span>
        ) : (
          <span style={{ color: "red" ,fontWeight:"bold"}}>Error!</span>
        )}
        {message && result !== "" ? (
          <p style={{fontWeight:"bold"}}>Result: {result}</p>
        ) : (
          <p>Please enter both input values!</p>
        )}
      </div>
    </div>
  );
};

export default Calculator;
