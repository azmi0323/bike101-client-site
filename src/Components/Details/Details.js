import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";
const Details = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [addItems, setAddItems] = useState(0);

  useEffect(() => {
    axios.get(`/products/${id}`).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, [id, loading]);

  const handleAddItems = (e) => {
    e.preventDefault();
    if (addItems < 0) {
      return toast.warn("you can not add negative value");
    }
    if (addItems < 5 || addItems > 100) {
      return toast.warning("Items can be add only 5 to 100");
    }

    const updatedQuantity = parseInt(products.quantity) + parseInt(addItems);
    axios
      .put(`/product/${id}`, { updatedQuantity })
      .then((res) => setLoading(true))
      .catch((error) => console.dir(error));
  };

  // const handleDeliver = () => {
  //   if (products.quantity <= 0) {
  //     toast("cannot be the value 0)");
  //   } else {
  //     const updatedQuantity = products.quantity - 1;
  //     axios
  //       .put(`/product/${id}`, { updatedQuantity })
  //       .then((res) => setLoading(true))
  //       .catch((error) => console.log(error));
  //   }
  // };

  if (loading) {
    return (
      <div className="spinner_">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
  return (
    <div>
      <div className="container my-5">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4 p-0 p-lg-4">
              <img
                src={products?.img}
                className="img-fluid rounded-start mx-auto mt-2 text-center d-block"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{products.name}</h5>
                <h6 className="card-title">Price : {products.price}</h6>
                <p className="card-text">Details : {products.body}</p>
                <p className="card-text">Quantity : {products.quantity}</p>
                <p className="card-text">Minimum Order Quantity : {products.minOrderQuantity}</p>
                {/* <button className="btn btn-danger" onClick={handleDeliver}>
                  Delivered
                </button> */}

                {/* <form className="d-flex mx-auto mt-5">
                  <input
                    className="py-1 input-field me-2"
                    type="number"
                    name=""
                    id=""
                    value={addItems}
                    onChange={(e) => setAddItems(e.target.value)}
                    required
                  />

                  <input
                    onClick={handleAddItems}
                    className=" input-btn py-2"
                    type="submit"
                    value="Add items"
                  />
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" my-5 container py-3 mx-auto form-container">
        <div className="">
          <form className=" mx-auto">
            <h3 className="text-center text-success fw-bold pt-4">
              Purchase Order
            </h3>
            <label className="mt-3 text-success fw-bold" htmlFor="email">
              Product Name
            </label>
            <input
              className="w-100 input-field"
              type="text"
              name="name"
              disabled
              value={products?.name}
              id=""
              required
            />
            <label className="mt-3 text-success fw-bold" htmlFor="email">
              Email
            </label>
            <input
              className="w-100 input-field"
              type="email"
              name="email"
              value={products?.email}
              disabled
              id=""
              required
            />
            <label className="mt-3 text-success fw-bold" htmlFor="email">
              Price
            </label>
            <input
              className="w-100 input-field"
              type="number"
              name="email"
              value={products.price}
              id=""
              required
            />
            <label className="mt-3 text-success fw-bold" htmlFor="email">
              Minimum Order Quantity
            </label>
            <input
              className="w-100 input-field"
              type="quantity"
              name="quantity"
              placeholder={products.minOrderQuantity}
              id=""
              required
            />
            <label className="mt-3 text-success fw-bold" htmlFor="email">
              Phone Number
            </label>
            <input
              className="w-100 input-field"
              type="number"
              name="phone"
              
              
              id=""
              required
            />
            <label className="mt-3 text-success fw-bold" htmlFor="address">
              Address
            </label>
            <input
              className="w-100 input-field"
              type="text"
              name="address"
              
              id=""
              required
            />
            <input
              className=" input-btn d-block mx-auto mt-3"
              type="submit"
              value="Confirm Order"
            />
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
