import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const CheckOut = () => {
  return (
    <>
      <Header></Header>
      <div className="container pt-4">
        <h1>this is CheckOut Page</h1>
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
              <td>product Name</td>
              <td>1</td>
              <td>150</td>
            </tr>
            <tr>
              <th>Total</th>
              <td></td>
              <th>150</th>
            </tr>
          </tbody>
        </table>
        <div className="ml-auto">
          <Link to="" className="btn btn-primary ">
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
