import React from "react";
import Button from "../../containers/Button";
import "./index.css";
function Wrapper() {
  return (
    <div className="wrapper">
      <Button type="func" value={"AC"} />
      <Button type="func" value={"DEL"} />
      <Button type="character" value={"%"} />
      <Button type="character" value={"/"} />
      <Button value={7} />
      <Button value={8} />
      <Button value={9} />
      <Button type="character" value={"*"} />
      <Button value={4} />
      <Button value={5} />
      <Button value={6} />
      <Button type="character" value={"-"} />
      <Button value={1} />
      <Button value={2} />
      <Button value={3} />
      <Button type="character" value={"+"} />
      <Button type="character" value={"+/-"} />
      <Button value={0} />
      <Button type="character" value={"."} />
      <Button type="special" value={"="} />
    </div>
  );
}
export default Wrapper;
