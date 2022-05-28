import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageOrder = () => {

    
    const [ordewrs, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/orders')
    .then(res=>setOrders(res.data))
  }, []);
    return (
        <div>
            manage order
        </div>
    );
};

export default ManageOrder;