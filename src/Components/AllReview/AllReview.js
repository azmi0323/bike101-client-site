import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";

const AllReview = () => {

    const [review, setReview] = useState([]);

  useEffect(() => {
    axios.get('/reviews')
    .then(res=>setReview(res.data))
  }, []);
    return (
        <div>
           <div className="my-5 container ">
      <div className="my-5">
        <h1 className=" text-info fw-bold text-center">
          All Our Customer Reviews
        </h1>
        <hr className="mb-5"></hr>
      </div>
      <CardGroup>
        {
          review.map(item=>(
            <Card key={item._id}>
          <Card.Body>
            <Card.Title>{item.userName}</Card.Title>
            <Card.Text>
              {item.review}
            </Card.Text>
          </Card.Body>
        </Card>
          ))
        }
      </CardGroup>
    </div>
        </div>
    );
};

export default AllReview;