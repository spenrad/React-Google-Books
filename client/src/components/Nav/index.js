import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Google Books
        </a>
        <button
          className="navbar-toggler"
          type="button"
          dataBsToggle="collapse"
          dataBsTarget="#navbarNav"
          ariaControls="navbarNav"
          ariaExpanded="false"
          ariaLabel="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" ariaCurrent="page" href="/search">
                Search
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/saved">
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
