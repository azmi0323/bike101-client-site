import { Carousel } from "react-bootstrap";
import cover from "../../img/cover.png";
import "./Home.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import Review from "../Review/Review";
import Owner from "../Owner/Owner";

const Home = () => {
  const [products, setProducts] = useState([]);
  //   loading
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get("/products?limit=6").then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, [loading]);
  return (
    <div>
      
      <div className="">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block cover-img w-100"
              src={cover}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="my-5 container">
        <h1 className="text-center fw-bold text-info">All Products</h1>
        <hr />
      </div>
      <div className="container d-flex justify-content-center">
        <div className="card-compo ">
          {products.map((product) => (
            <Products key={product._id} product={product}></Products>
          ))}
        </div>
      </div>
      <div >
        <BusinessSummary></BusinessSummary>
        <Review></Review>
        <Owner></Owner>
      </div>
    </div>
  );
};

export default Home;
