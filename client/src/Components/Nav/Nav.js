import React from "react";
import { Link } from "react-router-dom";
const Nav = (props) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="row">
          <div className="col s6">
            <Link to="/" className="brand-logo">
              Tasks
            </Link>
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {props.links.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
