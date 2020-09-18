import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MySelect } from "./components/MySelect";
import CustomSelect from "./custom-select/CustomSelect";
import MinSelect from "./custom-select/MinSelect";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <MySelect /> */}
      {/* <CustomSelect /> */}
      <MinSelect />
    </div>
  );
}

export default App;
