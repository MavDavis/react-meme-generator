import "./App.css";
import Navbar from "./Componenents/Navbar";
import Main from "./Componenents/Main";
import { useState } from "react";
import data from "./assets/data";
import Box from "./Componenents/Box";
function App() {
  // const [num, setNum] = useState(0);
  const [datas, changeDatas] = useState(data);
  // const add = () => {
  //   setNum(num + 1);
  // };'
  const item = data.map((item) => {
    return <Box item={item} key={item.id} />;
  });
  const toggleBox = (id) => {
    let clickedBox = data.find((it) => it.id === id);
    clickedBox.on = !clickedBox.on;
    changeDatas((oldValue) => {
      return { ...oldValue, clickedBox };
    });
  };
  // const subtract = () => {
  //   setNum(num - 1);
  // };
  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className="div">{item}</div>
    </div>
  );
}

export default App;
