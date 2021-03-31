import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import Menubar from "../Menubar/Manubar";
import "./Header.css";

const Header = () => {
  const [logInUser] = useContext(userContext);
  return (
    <div className="header">
      <div className="container">
        <Menubar>
          {logInUser.email ? (
            <div>
              <h5 className="nav-link text-light">{logInUser.displayName}</h5>
            </div>
          ) : (
            <div>
              <Link to="/login" className="btn btn-primary text-light">
                Log In
              </Link>
            </div>
          )}
        </Menubar>
        <div className="py-3 ">
          <h1>Collect Your Needs From Here</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
