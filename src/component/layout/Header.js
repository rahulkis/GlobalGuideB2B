import React from 'react';
import logoImage from '../../assets/images/logo.png';
import saveImage from '../../assets/images/save.svg';
import MessageImage from '../../assets/images/msg.svg';
import SearchImage from '../../assets/images/search.svg';
import { Link } from 'react-router-dom';
import LandingSidebar from '../sidebar/Sidebar';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="header sticky-top">
        <nav className="navbar">
          <div className="container-fluid">
            <div className="row w-100 align-items-center">
              <div className="col-4">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasDarkNavbar"
                  aria-controls="offcanvasDarkNavbar"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="col-4 text-center">
                <Link className="navbar-brand me-0" href="#">
                  <img src={logoImage} alt="logo" />
                </Link>
              </div>
              <div className="col-4">
                <div className="d-flex align-items-center other-nav justify-content-md-end">
                  <Link href="#" className="text-dark me-3">
                    <img className="search" src={SearchImage} alt="" />
                  </Link>
                  <Link href="#" className="text-dark me-3">
                    <img className="img-2" src={saveImage} alt="" />
                  </Link>
                  <Link href="#" className="link">
                    <img className="img-2" src={MessageImage} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav className="navigation navbar navbar-expand-md">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/brands">
                    brands
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Company
                  </Link>
                </li>
                <li className="nav-item" >
                  <NavLink className="nav-link" to="/distilleries">
                    Distilleries
                  </NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/releases">
                    Releases
                  </NavLink>
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
              </ul>
            </div>
          </div>
        </nav>
        <LandingSidebar />
      </header>
    </>
  );
}

export default Header;
