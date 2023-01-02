import React, { useState, useEffect } from "react";
import Star from "./Star";
import Count from "./Count";
let obj = "";

export default function Main() {
  const [res, changeRes] = useState({
    imgs: [],
    upperText: "Hello World",
    LowerText: "Placeholder Meme",
    img: "https://i.imgflip.com/af002.jpg",
    icon: false,
  });

  const [count, countCalc] = useState(0);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        obj = response.data.memes;
        changeRes((oldValue) => ({ ...oldValue, imgs: obj }));
      })
      .catch((err) => console.error(err));
  }, []);

  function fetchMeme() {
    let random = Math.random() * 100;
    let ran = Math.floor(random);
    changeRes((oldValue) => ({ ...oldValue, img: oldValue.imgs[ran].url }));

    console.log(res.imgs[ran].url);
  }

  const toggleIcon = () => {
    changeRes((oldValue) => ({ ...oldValue, icon: !oldValue.icon }));
  };
  const changeInputValue = (e) => {
    changeRes((oldValue) => ({ ...oldValue, [e.target.name]: e.target.value }));
  };
  function incCount() {
    countCalc(count + 1);
  }
  function deccCount() {
    countCalc((oldValue) => {
      return oldValue - 1;
    });
  }
  return (
    <>
      <div className="div1">
        <input
          type="text"
          value={res.upperText}
          name="upperText"
          onChange={changeInputValue}
        />
        <input
          type="text"
          value={res.LowerText}
          name="LowerText"
          onChange={changeInputValue}
        />
      </div>
      <div onClick={fetchMeme} className="button">
        <p>Get a new meme image 🖼</p>
      </div>
      <div className="img-div">
        <p className="input top">{res.upperText}</p>
        {res.img.length ? <img src={res.img} alt="img" /> : ""}
        <p className="input bottom">{res.LowerText}</p>
        <Star res={res.icon} handleClick={toggleIcon} />
      </div>
      <div className="countNum">
        <span className="countMath" onClick={incCount}>
          +
        </span>
        <Count num={count} />
        <span className="countMath" onClick={deccCount}>
          -
        </span>
      </div>
    </>
  );
}
