/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <link className="link" to="/">
            Home
          </link>
        </li>
        <li>
          <link className="link" to="/Calculator">
            Calculator
          </link>
        </li>
        <li>
          <link className="link" to="/Quote">
            Quote
          </link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
