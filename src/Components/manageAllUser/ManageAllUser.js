import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserInfo from '../UserInfo/UserInfo';

const ManageAllUser = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get('/users')
        .then(res=>setUsers(res.data))


    },[])
    return (
        <div>
           {
               users.map(user=><UserInfo key={user._id} user={user}></UserInfo>)
           }
        </div>
    );
};

export default ManageAllUser;