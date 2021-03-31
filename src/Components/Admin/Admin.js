import React from "react";
import { Link } from "react-router-dom";

import AddProduct from "../AddProduct/AddProduct";

const Admin = () => {
  return (
    <div>
      <div className="container pt-4">
        <div className="row">
          <div className="col-3">
            <div className="navlogo  text-center">
              <Link to="/" className="text-decoration-none">
                <h1>FOODS FARM</h1>
              </Link>
            </div>
          </div>
          <div className="col-9">
            <AddProduct></AddProduct>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
