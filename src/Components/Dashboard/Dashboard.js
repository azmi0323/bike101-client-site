import React from 'react';
import { Nav, NavLink } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div>
            <div className='row'>
                <div className='col bg-danger'>
                <Nav>
              
                <div>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-active" : "link"
                    }
                    to="/manageItems"
                  >
                    Manage Items
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-active" : "link"
                    }
                    to="/AddItems"
                  >
                    Add Items
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-active" : "link"
                    }
                    to="/myItems"
                  >
                    My Items
                  </NavLink>
                </div>
               
               
            </Nav>

                </div>
                <div className='col col-9  bg-info '>
                    <Outlet></Outlet>
                   
                </div>
            </div>
        </div>
    );
};

export default Dashboard;