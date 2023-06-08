/*eslint-disable */

import "./App.css";
import React from "react";
import Calculator from "./componets/calculator";
import Input from "./componets/Input";
import Button from "./componets/button";



const App = () => {
  return (
    <div className="App">
      <div className="calculator-wrapper">
        <Input />
        <Button />
        <div className="row">
          <Calculator symbol="AC" />
          <Calculator symbol="+/-" />
          <Calculator symbol="%" />
          <Calculator symbol="+" Color="#f2a33c" />
        </div>
        <div className="row">
          <Calculator symbol="7" />
          <Calculator symbol="8" />
          <Calculator symbol="9" />
          <Calculator symbol="X" Color="#f2a33c" />
        </div>
        <div className="row">
          <Calculator symbol="4" />
          <Calculator symbol="5" />
          <Calculator symbol="6" />
          <Calculator symbol="-" Color="#f2a33c" />
        </div>
        <div className="row">
          <Calculator symbol="1" />
          <Calculator symbol="2" />
          <Calculator symbol="3" />
          <Calculator symbol="+" Color="#f2a33c" />
        </div>
        <div className="row">
          <Calculator symbol="0" />
          <Calculator symbol="" />
          <Calculator symbol="." />
          <Calculator symbol="=" Color="#f2a33c" />
        </div>
      </div>
    </div>
  );

};

export default App;
