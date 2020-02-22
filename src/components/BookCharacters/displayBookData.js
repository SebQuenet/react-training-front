import React from "react";

/* Display the details of one book and the details of the all characters of this book */ 
const displayBookData = ({
  key,
  value,
  keyArray
}) => {
  return (
    ((Array.isArray(value) && !value.includes("")) || (!Array.isArray(value) && value !== '')) &&
    !keyArray.includes(`${key}`) &&
    <ul key = {`${key}${value}`}>
      <li><span> <strong> {key} </strong>: {value.isArray ? value.map(val => val):value}</span></li>
    </ul>
  );
};

export default displayBookData;