import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container">

    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a className="navbar-brand">XCell</a>
      <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="my-nav" className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink to="/" activeClassName="active" className="nav-link" >Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" tabIndex="-1" data-toggle="modal" data-target="#exampleModalCenter">Summary</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  )
}

export default NavBar