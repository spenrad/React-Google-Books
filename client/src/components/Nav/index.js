import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/search">
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/saved">
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
