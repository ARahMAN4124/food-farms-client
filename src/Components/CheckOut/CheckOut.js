import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import Header from "../Header/Header";

const CheckOut = () => {
  const [logInUser] = useContext(userContext);
  const [checkOut, setCheckOut] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/checkout/${logInUser.productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCheckOut(data[0]);
      });
  }, [logInUser.productId]);
  return (
    <>
      <Header></Header>
      <div className="container pt-4">
        <h1>CheckOut</h1>
        <table className="table rounded shadow mt-4">
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{checkOut.productName}</td>
              <td>1</td>
              <td>{checkOut.price}</td>
            </tr>
            <tr>
              <th>Total</th>
              <td></td>
              <th>{checkOut.price}</th>
            </tr>
          </tbody>
        </table>
        <div className="ml-auto">
          <Link to="/order" className="btn btn-primary ">
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
