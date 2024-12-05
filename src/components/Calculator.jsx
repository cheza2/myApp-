import React, { useState } from 'react'
import './input.number.ff.scss'
import './Calculator.css';


export const Calculator = () => {

const [value1, setValue1] = useState("");
const [value2, setValue2] = useState("");
const [result, setResult] = useState(0);
	
	return(
   <div>
    <h3>
		<input value={value1} type="number" onChange={event => setValue1(event.target.value)} />
		<input value={value2} type="number" onChange={event => setValue2(event.target.value)} />
    </h3>

    <h3>
		<button onClick={() => setResult(Number(value1) + Number(value2))}>+</button>
    <button onClick={() => setResult(Number(value1) - Number(value2))}>-</button>
    <button onClick={() => setResult(Number(value1) * Number(value2))}>*</button>
    <button onClick={() => setResult(Number(value1) / Number(value2))}>/</button>
    <button onClick={() => setResult("")} className="clear color">clear</button>
    </h3>

    <div className="keypad">
		<p>result: {result}</p>
    </div>
	</div>
  )
};
export default Calculator;
