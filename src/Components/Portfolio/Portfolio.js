import React from "react";
import { ProgressBar } from "react-bootstrap";
import myBg from "../../img/my-bg.png";
import "./Portfolio.css";
import makeup from '../../img/makeup.png'
import photography from '../../img/photography.png'
import bike from '../../img/bike.png'


const Portfolio = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row d-flex align-items-center justify-content-center ">
          <div className="col-lg-6">
            <img className="img-sizing img-fluid" src={myBg} alt="" />
          </div>
          <div className="col-lg-6">
            <h3>Hi There</h3>
            <h1>
              I am <span className="text-primary">Aazmi Habib</span>
            </h1>
            <p>
              I am Bangladeshi web designer and developer focused on Front End
              Develop. I will make suer clean and user friendly experience. My
              passionate about building excellent website and improve about
              building.
            </p>
            <button className="btn btn-primary"> Explore me</button>
          </div>
        </div>
        <div>
          <h1 className="fw-bold text-center my-4">
            About <span className="text-primary">Me</span>
          </h1>
          <div className="row">
            <div className="col-lg-6">
              <h4 className="fw-bold my-3">PERSONAL INFORMATION</h4>
              <div className="row">
                <div className="col-lg-6">
                  <p>
                    NAME: <span className="fw-bold">Aazmi Habib</span>
                  </p>
                  <p>
                    AGE: <span className="fw-bold">25</span>
                  </p>
                  <p>
                    NATIONALITY: <span className="fw-bold">Bangladeshi</span>
                  </p>
                  <p>
                    Work Status: <span className="fw-bold">Available</span>
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    Address: <span className="fw-bold">Dhaka Bangladesh</span>
                  </p>
                  <p>
                    Phone: <span className="fw-bold">+88 01303823282</span>
                  </p>
                  <p>
                    Email:{" "}
                    <span className="fw-bold">azmihabib0323@gmail.com</span>
                  </p>
                  <p>
                    Language: <span className="fw-bold">Bangla, English</span>
                  </p>
                </div>
              </div>
              <a href="https://drive.google.com/file/d/1qIhjh5Tg06TOXIu90djYUHmam-_mXUT2/view?usp=sharing" target='_blank' rel="noreferrer">
                  <button className="btn btn-primary">Download Resume</button>
              </a>
            </div>
            <div className="col-lg-6">
              <label htmlFor="">HTML</label>
              <ProgressBar striped variant="success" now={98} />
              <label htmlFor="">CSS</label>
              <ProgressBar striped variant="info" now={87} />
              <label htmlFor="">JS</label>
              <ProgressBar striped variant="warning" now={76} />
              <label htmlFor="">REACT</label>
              <ProgressBar striped variant="danger" now={88} />
              <label htmlFor="">MONGO DB</label>
              <ProgressBar striped variant="success" now={61} />
              <label htmlFor="">EXPRESS</label>
              <ProgressBar striped variant="info" now={55} />
              <label htmlFor="">NODE</label>
              <ProgressBar striped variant="warning" now={30} />
            </div>
          </div>
        </div>
        <div>
            <h1 className="fw-bold my-5 text-center">Recent <span className="text-primary">Project</span></h1>
            <div className="row">
                <div className="col-lg-4 text-center">
                   <img className="img-fluid" src={makeup} alt="" />
                   <h3>Mini MakeUp</h3>
                   <p>A MERN stack inventory management website</p>
                   <a target='_blank' href="https://assignment-eleven-project.web.app/" rel="noreferrer">
                   <button className="btn btn-primary">Live Preview</button>
                   </a>
                </div>
                <div className="col-lg-4 text-center">
                <img className="img-fluid" src={photography} alt="" />
                   <h3>CaptureTheMoment</h3>
                   <p>A Photography service provider website.</p>
                   <a target='_blank' href="https://venerable-dusk-d63a8f.netlify.app/" rel="noreferrer">
                   <button className="btn btn-primary">Live Preview</button>
                   </a>
                    </div>
                <div className="col-lg-4 text-center">
                <img className="img-fluid" src={bike} alt="" />
                   <h3>BikeHub</h3>
                   <p>Stopover in azure lakes, courageous terrains outback.</p>
                   <a target='_blank' href="https://ladakh-bike-rent-clinte-review-project-aazmi-2022.netlify.app/" rel="noreferrer">
                   <button className="btn btn-primary">Live Preview</button>
                   </a>
                    </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
