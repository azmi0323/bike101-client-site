import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet,NavLink } from "react-router-dom";
import './Dashboard.css'
const Dashboard = () => {
  const [user, setUser] = useState({})
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            axios.get('/user', {
                headers: {
                    Authorization: token

                }
            })
                .then(res => {
                    setUser(res.data)
                })
        }
    }, [])
    console.log(user);
    
  return (
    <section className="d-flex align-items-stretch h-100">
      <div className="sidebar2">
      <NavLink to="/dashboard/">My Order</NavLink>
        <NavLink to="/dashboard/profile">My Profile</NavLink>
        {
          user.role==='admin'?(<>
          <NavLink to="/dashboard/manageOrder">Manage All Orders</NavLink>
        <NavLink to="/dashboard/addItems">Add A Product</NavLink>
        <NavLink to="/dashboard/manageItems">Manage Products</NavLink>
        <NavLink to="/dashboard/manageAllUser">Manage User</NavLink>
        <NavLink to="/dashboard/allReview">All Review</NavLink>
          </>):(<>
          
          </>)
        }
        
        
      </div>
      
      <div className="w-100">
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
