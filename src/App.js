import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import bgImage from "../src/Icons/bg.png";
import Home from "./components/Home";

function App() {
  return (
    <div
      className="bg-cover  w-full h-full border bg-center bg-no-repeat"
      style={{ background: `url(${bgImage})` }}
    >
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
