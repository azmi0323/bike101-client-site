import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyItems = () => {
    const [order, setOrder] = useState([])
    const [loading, setLoading] = useState(true)
console.log(localStorage.getItem('token'));
    useEffect(() => {
        axios.get("/order",{
            headers:{
                authorization:localStorage.getItem('token')
            }
        })
            .then(res => {
                setOrder(res.data)
                setLoading(false)
                console.log(res.data);
            })
    }, [loading])
   
    return (
        <div>
            <h1 className='text-center'>You can manage your website {order.length}</h1>
        </div>
    );
};

export default MyItems;