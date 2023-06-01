import { useState } from "react";
import "./App.css";
import NumButtons from "./components/NumButtons";

function App() { 
  const [cal, setCal] = useState('');
  const [res, setRes] = useState('');
  const operator = ['/', '*', '+', '-', '.'];

  const calculate = (arg) => {
    if (
      operator.includes(arg) && cal === '' ||
      operator.includes(arg) && operator.includes(cal.slice(-1))
    ) return;

    setCal(cal + arg);

    if(!operator.includes(arg)) {
      setRes(eval(cal + arg).toString())
    }
  }

  const result = () => {
    setCal(eval(cal).toString());
  }

  const clear = () => {
    setCal(cal.slice(0, -1));
    setRes(cal.slice(0, -1));
    
  }
  
  return (
    <div className="App">
      <div className='calculator'>
        <div className='display'>
          {res ? <span>({res})</span> : ''} &nbsp;
          { cal || '0'}
        </div>

      <div className='operators'>
        <button onClick={() => calculate('/')}>/</button>
        <button onClick={() => calculate('*')}>*</button>
        <button onClick={() => calculate('+')}>+</button>
        <button onClick={() => calculate('-')}>-</button>

        <button onClick={clear}>DEL</button>
      </div>

      <div className="digits">
        <NumButtons calculate={calculate} />
        <button onClick={() => calculate('0')}>0</button>
        <button onClick={() => calculate('.')}>.</button>
        <button onClick={result}>=</button>
      </div>
      </div>
    </div>
  );
}

export default App;
