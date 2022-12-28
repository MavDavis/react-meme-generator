import React, { useState } from "react";
import Star from './Star'
import Count from './Count'
let obj = "";

export default function Main() {
  const [res, changeRes] = useState({
    img: "https://i.imgflip.com/2xscjb.png",
    upperText: "Hello World",
    LowerText: "Placeholder Meme",
    icon:false
  });
const [count, countCalc] = useState(0)
  function fetchMeme() {
    let random = Math.random() * 100;
    let ran = Math.floor(random);
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        obj = response.data.memes[ran].url;
        changeRes((oldValue) => ({ ...oldValue, img: obj }));
      })
      .catch((err) => console.error(err));
  }
  function changeUpperInputValue(e) {
    if (e.key === "Enter") {
      changeRes((oldValue) => ({ ...oldValue, upperText: e.target.value }));
    }
    // e.target.value = "";
  }
  function changeLowerInputValue(e) {
    if (e.key === "Enter") {
      changeRes((oldValue) => ({ ...oldValue, LowerText: e.target.value }))
    }
  }
const toggleIcon = ()=>{
  changeRes((oldValue) => ({ ...oldValue, icon:!oldValue.icon }))

}
function incCount(){
  countCalc(count+1)
}
function deccCount(){
  countCalc(oldValue =>{
  return oldValue - 1
})
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
        <p className="input top">{res.upperText}</p>
        {res.img.length ? <img src={res.img} alt="img" /> : ""}
        <p className="input bottom">{res.LowerText}</p>
      <Star res ={res.icon} handleClick={toggleIcon}/>
      </div>
      <div className="countNum">
       <span className="countMath" onClick={incCount}>+</span>
        <Count num ={count}/>
       <span className="countMath" onClick={deccCount}>-</span>
      </div>
    </>
  );
}
