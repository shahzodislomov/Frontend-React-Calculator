import React, { useState } from 'react';
import './App.css'; 

function Calculator() {
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = (buttonText) => {
        if (buttonText === "=") {
            try {
                setInputValue(eval(inputValue).toString());
            } catch(error) {
                setInputValue("Error");
            }
        } else if (buttonText === "C") {
            setInputValue('');
        } else {
            setInputValue(prevValue => prevValue + buttonText);
        }
    };

    return (
        <div className="barchasi">
            <div className="buttons">
                <div className="input">
                    <input type="text" value={inputValue} readOnly />
                </div><br />
                <div className="first">
                    <button onClick={() => handleButtonClick('7')}>7</button>
                    <button onClick={() => handleButtonClick('8')}>8</button>
                    <button onClick={() => handleButtonClick('9')}>9</button>
                    <button onClick={() => handleButtonClick('/')}>/</button>
                </div>
                <div className="second">
                    <button onClick={() => handleButtonClick('4')}>4</button>
                    <button onClick={() => handleButtonClick('5')}>5</button>
                    <button onClick={() => handleButtonClick('6')}>6</button>
                    <button onClick={() => handleButtonClick('*')}>*</button>
                </div>
                <div className="third">
                    <button onClick={() => handleButtonClick('1')}>1</button>
                    <button onClick={() => handleButtonClick('2')}>2</button>
                    <button onClick={() => handleButtonClick('3')}>3</button>
                    <button onClick={() => handleButtonClick('+')}>+</button>
                </div>
                <div className="fourth">
                    <button onClick={() => handleButtonClick('C')}>C</button>
                    <button onClick={() => handleButtonClick('0')}>0</button>
                    <button onClick={() => handleButtonClick('-')}>-</button>
                    <button onClick={() => handleButtonClick('=')}>=</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
