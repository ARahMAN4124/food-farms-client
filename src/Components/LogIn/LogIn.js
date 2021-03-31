import React, { useContext } from "react";
import "./LogIn.css";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./AuthConfig";
import Logo from "../../logos/Group 1329.png";
import { userContext } from "../../App";
import { Link, useHistory, useLocation } from "react-router-dom";
import Header from "../Header/Header";

firebase.initializeApp(firebaseConfig);

const LogIn = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const provider = new firebase.auth.GoogleAuthProvider();

  const [logInUser, setLogInUser] = useContext(userContext);

  const handleSingIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        const newUser = { ...user };

        setLogInUser(newUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <>
      <div className="container pt-4">
        <div className="navlogo  text-center">
          <Link to="/" className="text-decoration-none">
            <h1>FOODS FARM</h1>
          </Link>
        </div>
        <div className="mt-4 logInform d-flex justify-content-center align-items-center">
          <div className="text-center">
            <h2 className="pb-2">Login With</h2>
            <button
              className="btn btn-outline-primary mb-3"
              onClick={handleSingIn}
            >
              Continue With Google
            </button>
            <p>
              Don't have an account? <Link to="">Create a new account</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
