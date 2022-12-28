import React from "react";
export default function Box(props) {
  const { handleClick, item } = props;
  return (
    <>
      <div
        style={{ width: "100px", height: "100px" }}
        className={item.on ? "red-bg" : "grey-bg"}
        onClick={handleClick}
      ></div>
    </>
  );
}
