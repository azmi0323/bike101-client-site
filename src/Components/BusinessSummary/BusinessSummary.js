import React from 'react';
import './BusinessSummary.css'
import like from '../../img/like.png'
import people from '../../img/people.png'
import pc from '../../img/pc_mobile.png'
import flug from '../../img/flag.png'
const BusinessSummary = () => {
    return (
        <div className=' my-5 '>
            <div className='container text-center'>
            <h1 className='text-info'>MILLIONS BUSINESS TRUST US </h1>
            <h5>TRY TO UNDERSTAND USERS EXPECTATION</h5>
            <hr />
            </div>
            <div className='container'>
            <div className='row'>
                <div className='col-6 col-lg-3'>
                    <img src={flug} className='pic-short' alt="" />
                    <h2 className='fw-bold'>72</h2>
                    <p className="text-info">
                    Countries
                    </p>
                </div>
                
                <div className='col-6 col-lg-3 mt-3'>
                    <img src={pc} className='pic-short' alt="" />
                    <h2 className='fw-bold'>535+</h2>
                    <p className="text-info">
                    Complete Project
                    </p>
                </div>
                <div className='col-6 col-lg-3'>
                    <img src={people} className='pic-short' alt="" />
                    <h2 className='fw-bold'>273+</h2>
                    <p className="text-info">
                    Happy Clients
                    </p>
                </div>
                <div className='col-6 col-lg-3'>
                    <img src={like} className='pic-short' alt="" />
                    <h2 className='fw-bold'>432+</h2>
                    <p className="text-info">
                    Feedbacks
                    </p>
                </div>
            </div>
            <div className='border  row d-flex justify-content-between align-items-center p-4 box-border'>
                <div className='col-lg-7'>
                 <h3 className='text-info fw-bold'>
                     Have any question about us or qet a products request?
                     </h3>
                     <h5>Don't hesitate to contact us</h5>
                </div>
                <div className='col-lg-5'>
                    <button className='btn btn-info me-3'>Request For Quote</button>
                    <button className='btn btn-dark'>Contact Us</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BusinessSummary;