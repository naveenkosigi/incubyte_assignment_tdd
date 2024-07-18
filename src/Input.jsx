import React from "react";
import { useRef } from "react";

export const add = (val) => {
  let value = val || "";
  let sum = 0;
  if (!value) {
    return sum;
  } else {
    let delimiter = ",";

    //check and update the delimeter
    if (value.startsWith("//")) {
      delimiter = value.slice(2).split("\n")[0];

      //remove the first line as its only used for identifying the delimiter
      value = value.slice(value.indexOf("\n") + 1);
    }

    const numbers = value.replaceAll("\n", delimiter).split(delimiter);
    for (let number of numbers) {
      sum += Number(number);
    }
  }
  return sum;
};

const Input = () => {
  const textAreaRef = useRef();

  const calculate = () => {
    const sum = add(textAreaRef?.current?.value);
    alert("The Total is " + sum);
  };

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
