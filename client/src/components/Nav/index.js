import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Google Books
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/search">
                Search
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/saved">
                Saved
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
