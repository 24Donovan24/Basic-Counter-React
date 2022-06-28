import React, { Component } from 'react';

//Stateless Functionl Component (If the class is simply making use of props, can just create it as a stateless functional component)
const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
              Navbar{" "}
              <span className="badge bg-pill bg-secondary">
                {totalCounters}
            </span>
          </a>
        </div>
      </nav>);
};
 
export default NavBar;