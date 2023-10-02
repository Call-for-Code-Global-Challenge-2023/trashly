import Image from "next/image";
import Link from "next/link";
import React from "react";
import {BsRecycle} from 'react-icons/bs'

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary nav_main"
      data-bs-theme="dark"
      style={{position:"fixed",top:"0",left:"0",width:"100%",zIndex:"10"}}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <BsRecycle style={{height:"2.5rem",width:"2.5rem"}}/> Trashly
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse bg-primary nav_menu"  id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/working">
                Working
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/products">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/sell">
                Sell
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  href="/redeem">
                Redeem
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Auth
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href="/login">
                  Login
                </Link>
                <Link className="dropdown-item" href="/signup">
                  Signup
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item disabled" href="/logout">
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
