import React from "react";
import logo from "./logo.svg";
import "./App.css";
//original components
import Basic1 from "./components/Basic1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Basic1 name="" />
      </header>
    </div>
  );
}

export default App;
