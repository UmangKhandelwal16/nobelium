import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Calculator.css'

function Calculator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  function handleButtonClick(value) {
    setInput(input + value);
  }

  function handleCalculate() {
    setOutput(eval(input));
  }

  return (
    <div className="calculator">
      <div className="input">
        <input type="text" value={input} isClearable />
      </div>
      <div className="output">
        <input type="text" value={output} readOnly />
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}

ReactDOM.render(<Calculator />, document.getElementById('root'));

export default Calculator;
