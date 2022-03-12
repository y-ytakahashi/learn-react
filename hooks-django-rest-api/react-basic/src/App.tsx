import React from "react";
import logo from "./logo.svg";
import "./App.css";
//original components
import Basic1 from "./components/Basic1";
import Basic1_1 from "./components/Basic1_1";
import Basic2 from "./components/Basic2";
import BasicUseEffect from "./components/BasicUseEffect";
import TimerContainer from "./components/TimerContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Basic1 name="" />
        <Basic1_1 />
        <Basic2 />
        <BasicUseEffect />
        <TimerContainer />
      </header>
    </div>
  );
}

export default App;
