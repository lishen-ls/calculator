import React from "react";
import "./index.css";
function Button({
  character,
  num,
  AC,
  DEL,
  point,
  inverse,
  result,
  value,
  type = ""
}) {
  function handleClick(value) {
    value = value.toString();
    if (type === "func") {
      switch (value) {
        case "AC":
          AC();
          break;
        case "DEL":
          DEL();
          break;
        default:
      }
    } else if (type === "special") {
      result();
    } else if (type === "character") {
      switch (value) {
        case "+/-":
          inverse();
          break;
        case ".":
          point();
          break;
        default:
          character(value);
      }
    } else {
      num(value);
    }
  }
  return (
    <div onClick={() => handleClick(value)} className={"button " + type}>
      {value}
    </div>
  );
}
export default Button;
