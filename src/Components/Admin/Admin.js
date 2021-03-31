import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import plus from "../../logos/icons/plus 1.png";
import manageicon from "../../logos/icons/plus 1.png";

import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "../ManageProduct/ManageProduct";

const Admin = () => {
  const [handleRouteChange, setHandleRouteChange] = useState({
    isAddProduct: true,
    isManageProduct: "",
  });

  const manageHandle = () => {
    const manage = { ...handleRouteChange };
    manage.isAddProduct = false;
    manage.isManageProduct = true;
    setHandleRouteChange(manage);
  };
  const addProductHandle = () => {
    const manage = { ...handleRouteChange };
    manage.isAddProduct = true;
    manage.isManageProduct = false;
    setHandleRouteChange(manage);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <aside className="col-3">
            <div className="navlogo  text-center pt-4">
              <Link to="/" className="text-decoration-none">
                <h1>FOODS FARM</h1>
              </Link>
            </div>
            <div className="pt-4">
              <div className="py-2">
                <Link onClick={manageHandle} className="btn btn-danger">
                  <img src={manageicon} style={{ width: "26px" }} alt="icon" />
                  Manage Product
                </Link>
              </div>
              <div className="py-2">
                <Link onClick={addProductHandle} className="btn btn-danger">
                  <img src={plus} alt="icon" style={{ width: "26px" }} />
                  Add Product
                </Link>
              </div>
            </div>
          </aside>
          <div className="col-9  pt-4">
            {handleRouteChange.isAddProduct ? (
              <AddProduct></AddProduct>
            ) : (
              <ManageProduct></ManageProduct>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
