import "./App.css";
import Navbar from "./Componenents/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="div1">
        <input type="text" />
        <input type="text" />
      </div>
      <div className="button">
        <p>Get a new meme image 🖼</p>
      </div>
      <div className="img-div">
        <img src="" alt=""/>
      </div>
    </div>
  );
}

export default App;
