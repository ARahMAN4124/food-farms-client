import React from "react";
import "./Menubar.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menubar = (props) => {
  return (
    <div>
      <Navbar className="navbar navbar-dark" expand="lg">
        <Link to="/" className="text-light logo">
          FOODS FARM
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Link to="/" className="nav-link text-light">
              Home
            </Link>
            <Link to="/order" className="nav-link text-light">
              Order
            </Link>
            <Link to="/events" className="nav-link text-light">
              Admin
            </Link>
            <Link to="" className="nav-link text-light">
              Deals
            </Link>
            <div>{props.children}</div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Menubar;
