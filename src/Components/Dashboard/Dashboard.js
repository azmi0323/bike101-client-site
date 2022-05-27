import React from "react";
import { Outlet,NavLink } from "react-router-dom";
import './Dashboard.css'
const Dashboard = () => {
  return (
    <section className="d-flex align-items-stretch h-100">
      <div className="sidebar">
        <NavLink to="/dashboard/">My Order</NavLink>
        <NavLink to="/dashboard/profile">My Profile</NavLink>
        <NavLink to="/dashboard/manageOrder">Manage All Orders</NavLink>
        <NavLink to="/dashboard/addItems">Add A Product</NavLink>
        <NavLink to="/dashboard/manageItems">Manage Products</NavLink>
        <NavLink to="/dashboard/manageAllUser">Manage User</NavLink>
        <NavLink to="/dashboard/allReview">All Review</NavLink>
      </div>
      <div className="w-100">
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
