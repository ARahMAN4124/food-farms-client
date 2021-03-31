import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import editIcon from "../../logos/icons/edit 1.png";
import deleteIcon from "../../logos/icons/Group 33150.png";

const ManageProduct = () => {
  const [manageProduct, setManageProduct] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setManageProduct(data));
  }, []);
  const handleDeleteProdduct = () => {
    console.log("product deleted");
  };
  return (
    <>
      <div>
        <h3>Manage Product</h3>
      </div>
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {manageProduct.map((product) => (
              <tr>
                <th>{product.productName}</th>
                <th>{product.price}</th>
                <th className="d-flex">
                  <div className="rounded bg-success">
                    <img
                      src={editIcon}
                      alt="icon"
                      style={{
                        width: "26px",
                        padding: "1px",
                      }}
                    />
                  </div>
                  <div className="rounded bg-danger">
                    <img
                      onClick={handleDeleteProdduct}
                      src={deleteIcon}
                      alt="icon"
                      style={{ width: "26px", padding: "1px" }}
                    />
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageProduct;
