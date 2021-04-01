import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import editIcon from "../../logos/icons/edit 1.png";
import deleteIcon from "../../logos/icons/Group 33150.png";

const ManageProduct = () => {
  const [manageProduct, setManageProduct] = useState([]);
  useEffect(() => {
    const url = `https://cherry-cobbler-14506.herokuapp.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setManageProduct(data));
  }, []);
  const handleDeleteProduct = (id) => {
    console.log("deleted");
    // fetch(`http://localhost:5000/delete/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log("deleted product"));
  };
  const handleEditProduct = () => {
    alert("insha allah,I will try to add this feature");
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
            {manageProduct.length === 0 && (
              <div className="text-center">
                <div className="spinner-border text-success" role="status">
                  <span className="visually-hidden"></span>
                </div>
              </div>
            )}
            {manageProduct.map((product) => (
              <tr>
                <th>{product.productName}</th>
                <th>{product.price}</th>
                <th className="d-flex">
                  <div className="rounded bg-success">
                    <img
                      src={editIcon}
                      onClick={handleEditProduct}
                      alt="icon"
                      style={{
                        width: "26px",
                        padding: "1px",
                      }}
                    />
                  </div>
                  <div className="rounded bg-danger">
                    <img
                      onClick={() => handleDeleteProduct(product._id)}
                      src={deleteIcon}
                      type="button"
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
