import axios from "axios";
import './ManageItems.css'
import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ManageItems = () => {

      
  const [products, setProducts] = useState([]);
  //   loading
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("/products").then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, [loading]);

  const handleRemove = (id) => {
    axios.delete(`/product/${id}`).then((res) => {
      setLoading(true)
    });
  };
  if(loading){
      return (
          <div className="spinner_">
              <Spinner animation="border" variant="primary" />
          </div>
      )
  }
  return (
    <div className="container mt-4">
      <Table bordered hover className="text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Supplier Name</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.supplier}</td>
              <td>
                  <button 
                  onClick={()=>handleRemove(product._id)}
                  className="btn-dlt ">
                    <img  src='' alt="" />
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p className="text-center">
      <Link className="btn my-3 btn-info" to='/addItems'>Add New Items</Link>
      </p>
    </div>
  );
};

export default ManageItems;
