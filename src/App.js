import "./App.css";
import Navbar from "./Componenents/Navbar";
import Main from "./Componenents/Main";
import { useState } from "react";
function App() {
 const [num, setNum] = useState(0);
 const add = ()=>{
  setNum(num + 1)
 }
 const subtract = ()=>{
  setNum(num - 1)
 }
  return (
    <div className="App">
      <Navbar />
      <Main />
<div className="div">

</div>
    </div>
  );
}

export default App;
