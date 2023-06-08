import './button.css';

import React from 'react';

const button = ({ symbol, color }) => (
  <div className="button-color">
    {(symbol, color)}
  </div>
);

export default button;
