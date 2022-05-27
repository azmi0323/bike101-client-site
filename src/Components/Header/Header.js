import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem('token')
  };

  return (
    <div className="">
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
        <Container>
          <NavLink className={"footer-style"} to="/">
            <h6 className="h1 text-white fw-bold ">
             Bike<span className="text-warning">101</span>
            </h6>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/products"
              >
                Products
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/blog"
              >
                Blog
              </NavLink>
              {
                user && <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              }
            </Nav>
            <Nav>
              {user ? (
                <div>
                  
                  <NavLink to='/'
                    className="link ms-3 fw-bold"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </NavLink>
                </div>
              ) : (
                <div>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-active" : "link"
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>

                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-active" : "link"
                    }
                    to="/signUp"
                  >
                    Sign Up
                  </NavLink>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
