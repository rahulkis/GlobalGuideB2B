// src/components/Menu.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/product-releases" className="link-style">
            Releases
          </Link>
        </li>
        <li>
          <Link to="/user" className="link-style">
            Students
          </Link>
        </li>
        <li>
          <Link to="/form" className="link-style">
            Forms
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
