import React from "react";
let obj = ''

function fetchMeme(){
let random = Math.random()*100
 let ran = Math.floor(random) ;
  fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(response => {
      obj = (response.data.memes[ran])
    console.log(obj);
    })
    .catch(err => console.error(err));
}
export default function Main() {
  return (
    <>
      <div className="div1">
        <input type="text" />
        <input type="text" />
      </div>
      <div onClick={fetchMeme} className="button">
        <p>Get a new meme image 🖼</p>
      </div>
      <div className="img-div">
     { obj ?  <img src={obj.url} alt="img" /> : <img src='' alt="img" />}
      </div>
    </>
  );
}
