import "./App.css";
import ResponsiveAppBar from "./Componts/Appbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componts/Home";
import Contactus from "./Componts/Contactus.js";
import About from "./Componts/About.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/home" exact element={<Home />}></Route>
          <Route path="contact" element={<Contactus />}></Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
