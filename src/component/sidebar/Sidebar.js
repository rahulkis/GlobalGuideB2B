import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <header className="header">
        <div className="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/releases">
                  Releases
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/distilleries">
                  Distilleries
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/brands">
                  Brands
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Merchants
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  News & Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Reviews
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Statistics
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Sidebar;
