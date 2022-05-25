import React from 'react';
import wowimg from '../../img/bikeParts1.webp'
const MostSell = () => {
    return (
        <div className='container my-5 p-5 box-border'>
            <h1 className="text-center text-info fw-bold">Most Selling Product This Year</h1>
            <hr />
            <div className='row d-flex align-items-center justify-content-center my-5'>
                <div className='col-lg-5'>
                    <img src={wowimg} alt="" />
                </div>
                <div className='col-lg-7'>
                    <h2 className='mt-4 text-warning fw-bold'>Most Sell</h2>
                    <h5>In this year we sell 1EKAL model bearing almost 50000 pices all over the world.</h5>
                </div>
            </div>
        </div>
    );
};

export default MostSell;