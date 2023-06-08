/*eslint-disable */

import "./calculator.css"; 

const Calculator = ({ symbol, Color }) => {
  return (
    <div className="calc-wrapper"style={{ backgroundColor:Color}}>
      {symbol}
    </div>
  );
};

export default Calculator;
