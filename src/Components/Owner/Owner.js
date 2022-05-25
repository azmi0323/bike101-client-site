import React from 'react';
import my_bg from '../../img/my-bg.png'
const Owner = () => {
    return (
        <div className='container my-5'>
            
            <div className='  p-5 box-border'>
            <h1 className=' fw-bold text-info text-center'>Our MD Sir Talk About The Company</h1>
            <hr className='mb-5'></hr>
                <div className='row d-flex align-items-center justify-content-center'>
                <div className='col-lg-5 '>
                    <img className='img-fluid' src={my_bg} alt="" />
                </div>
                <div className='col-lg-7'>
                    <h2 className='fw-bold text-center text-warning'>Owner Says</h2>
                    <h6>
                    "Our most demanding product we store for our customers. Here in this manufacturing we have made bike's parts and send the products in the worldwide. We can provide the showrooms our products by any times. This website basically use for everyone. We count our products through out this site."
                    </h6>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Owner;