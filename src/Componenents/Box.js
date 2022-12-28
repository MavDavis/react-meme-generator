import React from "react";
export default function Box(props){
    const {id, on } = props
    console.log(props);
    return (<>
      <div
        style={{ width: "100px", height: "100px" }}
        className={on ? "red-bg" : "grey-bg"}
        onClick={() => {
        //   toggleBox(item.id);
        }}
      ></div>
    </>)
}