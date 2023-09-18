import Image from "next/image";
import Link from "next/link";
import React from "react";
import {BsRecycle} from 'react-icons/bs'

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary"
      data-bs-theme="dark"
      style={{ height: "4rem" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
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
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" href="#">
                Home
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Pricing
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
                Dropdown
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href="#">
                  Action
                </Link>
                <Link className="dropdown-item" href="#">
                  Another action
                </Link>
                <Link className="dropdown-item" href="#">
                  Something else here
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" href="#">
                  Separated link
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
