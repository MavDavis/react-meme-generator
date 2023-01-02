import "./App.css";
import Navbar from "./Componenents/Navbar";
import Main from "./Componenents/Main";
import { useState } from "react";
import data from "./assets/data";
import Box from "./Componenents/Box";
import Resize from "./Componenents/Resize";
function App() {
  const [datas, changeDatas] = useState(data);
  const [resize, setResize] = useState(true);
  const item = datas.map((item) => {
    return (
      <Box
        item={item}
        key={item.id}
        handleClick={() => {
          toggleBox(item.id);
        }}
      />
    );
  });

  const toggleBox = (id) => {
    changeDatas((prevArray) =>
      prevArray.map((item) =>
        item.id === id ? { ...item, on: !item.on } : item
      )
    );
  };
  const toggleResize = () => {
    setResize((oldValue) => !oldValue);
  };
  return (
    <div className="App">
      <Navbar />
      <div>
        {resize && <Resize />}
        <button onClick={toggleResize}>toggleResize</button>
      </div>
      {/* <Main /> */}
      <div className="div">{item}</div>
    </div>
  );
}

export default App;
