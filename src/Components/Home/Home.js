import { Carousel } from 'react-bootstrap';
import React from 'react';
import cover from '../../img/cover.png'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="">
        <Carousel>
          <Carousel.Item>
            <img className="d-block cover-img w-100" src={cover}  alt="First slide" />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
        </div>
    );
};

export default Home;