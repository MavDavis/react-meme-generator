import React, { useState } from "react";
let obj = "";

export default function Main() {
  const [res, changeRes] = useState("");
  const [upperInput, changeUpperInput] = useState("");
  const [lowerInput, changeLowerInput] = useState("");
//   const [thingsArray, setThingsArray] = useState(["thing1", "thing2"]);
//  let pTag = thingsArray.map((item) => {
//     return <p>{item}</p>;
//   });
  function fetchMeme() {
    let random = Math.random() * 100;
    let ran = Math.floor(random);
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        obj = response.data.memes[ran].url;
        console.log(obj);
        changeRes(obj);
      })
      .catch((err) => console.error(err));
  }
  function changeUpperInputValue(e) {
    if (e.key === "Enter") {
      changeUpperInput(e.target.value);
      e.target.value = "";
    }
  }
  function changeLowerInputValue(e) {
    if (e.key === "Enter") {
      changeLowerInput(e.target.value);
      e.target.value = "";
    }
  }

  return (
    <>
      <div className="div1">
        <input type="text" onKeyUp={changeUpperInputValue} />
        <input type="text" onKeyUp={changeLowerInputValue} />
      </div>
      <div onClick={fetchMeme} className="button">
        <p>Get a new meme image 🖼</p>
      </div>
      <div className="img-div">
        <p className="input top">{upperInput}</p>
        {res.length ? <img src={res} alt="img" /> : ""}
        <p className="input bottom">{lowerInput}</p>
      </div>
      {/* <div>{pTag}</div>
      <p
        onClick={() => {
          setThingsArray((oldValue) => [
            ...oldValue,
            `Things${oldValue.length + 1}`,
          ]);
        }}
      >
        addp
      </p> */}
    </>
  );
}
