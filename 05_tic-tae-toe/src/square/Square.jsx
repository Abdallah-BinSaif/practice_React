import React from "react";
import { useState } from "react";

export default function Square({value, onSquareClick}) {
    
//   let [value, setValue] = useState(null);
//   function handleClick() {
//     setValue("X");
//   }
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
