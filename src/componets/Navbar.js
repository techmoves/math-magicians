/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1 className="topic">Math Magicians</h1>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/calculator">
            Calculator
          </Link>
        </li>
        <li>
          <Link className="link" to="/quote">
            Quote
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
