import React from "react";
import "./index.css";
function Button({clickHandle,value,type=''}) {
  return (
    <div className={"button "+type}>
      {value}
    </div>
  )
}
export default Button;