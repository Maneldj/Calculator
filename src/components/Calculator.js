import React, { useState } from "react";
import Listnumber from './listNumber';
import DisplayValue from './DisplayValue';
import ListOperator from "./listOperator";
import Big from 'big.js';

function Calculator() {
  const [total, setTotal] = useState(null);
  const [operator, setOperator] = useState(null);
  const [storedValue, setStoredValue] = useState(null);

  function isNumber(item) {
    return /[0-9]+/.test(item);
  }

  function checkDecimalPoint(button) {
    if (total){
      if (button === "." && total.includes(".")) {
      return ;
      }
      if (button === ".") {
      setTotal(total + button);
      }
    }
  }

  function checkEraseButton(button) {
    if (button === "AC") {
      setTotal(null);
      setOperator(null);
      setStoredValue(null);
    }
  }

  function checkOperator(button) {
    if (button === "+" || button === "-" || button === "x" || button === "÷") {
      setOperator(button);
    } 
  }

  function updateDisplay(button) {
    if (!total && isNumber(button)) {
        setTotal(button);
      }
    if (isNumber(button) && total) {
      setTotal(total + button);
    }
  }

  function checkNewArgument (button) {
    if (total && operator && isNumber(button) && !storedValue) {
      setStoredValue(total);
      setTotal(button);
    }
  }

  function checkTriggerOperation (button) {
    if (button === "=" && operator && storedValue) {
      setTotal(calculate(operator, total, storedValue))
      setOperator(null);
      setStoredValue(null);
    }
    if ((button === "+" || button === "-" || button === "x" || button === "÷") && operator && storedValue) {
      setTotal(calculate(operator, total, storedValue));
      setOperator(button);
      setStoredValue(null);
    }
  }

  function calculate (operation, currentValue, previousValue) {
    const x = Big(previousValue);
    const y = Big(currentValue);
    if (operation === "+") {
      const result = x.plus(y)
      return (result.toString());
    }
    if (operation === "-") {
      const result = x.minus(y)
      return (result.toString());
    }
    if (operation === "x") {
      const result = x.times(y)
      return (result.toString());
    }
    if (operation === "÷") {
      if (total === "0") {
        return ("Error! Divide by 0 impossible !")
      }
      const result = x.div(y)
      return (result.toString());
    }
  }

  function handleClick(e) {
    e.preventDefault();
    const currentButton = e.target.innerHTML;
    checkEraseButton(currentButton);
    checkDecimalPoint(currentButton);
    checkOperator(currentButton);
    updateDisplay(currentButton);
    checkNewArgument(currentButton);
    checkTriggerOperation(currentButton);
  }
  console.log(total);
  console.log(operator);
  console.log(storedValue);
  return (
    <div>
          <DisplayValue value= {total || storedValue || "0"}/>
          <Listnumber clickHandler={handleClick}/>
          <ListOperator clickHandler={handleClick}/>
    </div>
  );
}

export default Calculator;