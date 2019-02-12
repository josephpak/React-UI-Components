import React from 'react';
import './reset.css';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {

  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let actions = {
    clear: "Clear",
    multiply: "\u00D7",
    add: "+",
    divide: "÷",
    subtract: "\u2212",
    result: "="
  }

  return (
    <div className="App">
      <div className="row">
        <CalculatorDisplay />
      </div>
      <div className="row">
        <ActionButton action={actions.clear} buttonStyles="bigStyles"/>
        <ActionButton action={actions.divide} buttonStyles="defaultStyles"/>
      </div>
      <div className="row">
        <NumberButton number={numbers[7]} buttonStyles="defaultStyles" />
        <NumberButton number={numbers[8]} buttonStyles="defaultStyles" />
        <NumberButton number={numbers[9]} buttonStyles="defaultStyles" />
        <ActionButton action={actions.multiply} buttonStyles="defaultStyles" />
      </div>
      <div className="row">
        <NumberButton number={numbers[4]} buttonStyles="defaultStyles" />
        <NumberButton number={numbers[5]} buttonStyles="defaultStyles" />
        <NumberButton number={numbers[6]} buttonStyles="defaultStyles" />
        <ActionButton action={actions.subtract} buttonStyles="defaultStyles" />
      </div>
      <div className="row">
        <NumberButton number={numbers[1]} buttonStyles="defaultStyles" />
        <NumberButton number={numbers[2]} buttonStyles="defaultStyles" />
        <NumberButton number={numbers[3]} buttonStyles="defaultStyles" />
        <ActionButton action={actions.add} buttonStyles="defaultStyles" />
      </div>
      <div className="row">
        <NumberButton number={numbers[0]} buttonStyles="bigStyles" />
        <ActionButton action={actions.result} buttonStyles="defaultStyles" />
      </div>
    </div>
  );
};

export default App;
