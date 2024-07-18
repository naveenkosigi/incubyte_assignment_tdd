import React from "react";
import { useRef } from "react";

export const add = (val) => {
  let value = val || "";
  let sum = 0;
  if(!value){
    return sum;
  }
  return sum;
};


const Input = () => {
  const textAreaRef = useRef();

  const calculate = () => {
    const sum = add(textAreaRef?.current?.value);
    alert("The Total is " + sum);
  }

  return (
    <>
      <textarea ref={textAreaRef}></textarea>
      <br />
      <button type="button" onClick={calculate}>
        Calculate Total
      </button>
    </>
  );
};

export default Input;
