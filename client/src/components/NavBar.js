import React,{useContext} from 'react';
import { NavLink } from "react-router-dom";
import StudentContext from "./context/studentContext";
import PublishFile from "./PublishFile";

const NavBar = () => {
  const context = useContext(StudentContext);
  const {studentList} = context;
  
    return (
        <div className="container">

    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="navbar-brand">XCell</div>
      <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="my-nav" className="collapse navbar-collapse">
        <PublishFile/>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink to="/" activeClassName="active" className="nav-link" >Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/summary" className="nav-link" >Summary</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
    )
}

export default NavBar