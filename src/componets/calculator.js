import { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({
    next: null,
    operation: null,
    total: null,
  });
  const { next, operation, total } = state;
  const eventHandler = (e) => {
    setState(calculate(state, e.target.name));
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="row">
          <div className="display">{next || operation || total || 0}</div>
        </div>
        <div className="row">
          <Button className="calc-btn" value="AC" handleClick={eventHandler} />
          <Button className="calc-btn" value="+/-" handleClick={eventHandler} />
          <Button className="calc-btn" value="%" handleClick={eventHandler} />
          <Button
            className="calc-btn orange"
            value="÷"
            handleClick={eventHandler}
          />
        </div>
        <div className="row">
          <Button className="calc-btn" value="7" handleClick={eventHandler} />
          <Button className="calc-btn" value="8" handleClick={eventHandler} />
          <Button className="calc-btn" value="9" handleClick={eventHandler} />
          <Button
            className="calc-btn orange"
            value="*"
            handleClick={eventHandler}
          />
        </div>
        <div className="row">
          <Button className="calc-btn" value="4" handleClick={eventHandler} />
          <Button className="calc-btn" value="5" handleClick={eventHandler} />
          <Button className="calc-btn" value="6" handleClick={eventHandler} />
          <Button
            className="calc-btn orange"
            value="-"
            handleClick={eventHandler}
          />
        </div>
        <div className="row">
          <Button className="calc-btn" value="1" handleClick={eventHandler} />
          <Button className="calc-btn" value="2" handleClick={eventHandler} />
          <Button className="calc-btn" value="3" handleClick={eventHandler} />
          <Button
            className="calc-btn orange"
            value="+"
            handleClick={eventHandler}
          />
        </div>
        <div className="row">
          <Button className="calc-btn" value="0" handleClick={eventHandler} />
          <Button className="calc-btn" value="." handleClick={eventHandler} />
          <Button
            className="calc-btn orange"
            value="="
            handleClick={eventHandler}
          />
        </div>
      </div>
    </div>
  );
}
