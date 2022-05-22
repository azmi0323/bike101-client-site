import { Carousel } from 'react-bootstrap';
import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src='' alt="First slide" />
            <Carousel.Caption>
              <h1 className="text-danger fw-bold">
                Best Authentic Product <br /> Of Bangladesh
              </h1>
              <p>Here you can add more product as a employee of this company</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
        </div>
    );
};

export default Home;