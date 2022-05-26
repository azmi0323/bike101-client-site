
import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Products.css";
const Products = ({product, setLoading}) => {
  const { _id, img, name, quantity, body, price,minOrderQuantity } = product;




  return (
    <div className="my-2">
      <CardGroup className="">
        <Card className="user-card">
          <Card.Img className="img-size" variant="top" src={img} />
          <Card.Body>
            <Card.Title className="text-success fw-bold fs-4">
              {name}
            </Card.Title>
            <Card.Title>
              Price: <span className="text-danger fw-bold">$ {price}</span>
            </Card.Title>
            <Card.Text> <span className="fw-bold">Short Description about the product :</span> {body}</Card.Text>
          </Card.Body>
            <Card.Text className="ms-3 fw-bold">Quantity We Have : <span className="text-primary ">{quantity}</span> </Card.Text>
            <Card.Text className="ms-3 fw-bold">Minimum Order Quantity: <span className="text-primary ">{minOrderQuantity}</span> </Card.Text>
          
          <Card.Footer>
            <Link
              to={`/details/${_id}`}
              className="btn text-white  glow-on-hover pt-2  fw-bold d-block w-100"
            >
              Buy Now
            </Link>
            
          </Card.Footer>
        </Card>
      </CardGroup>

      
    </div>
  );
};

export default Products;
