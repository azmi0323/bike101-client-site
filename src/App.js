import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItems from "./Components/AddItems/AddItems";
import AllReview from "./Components/AllReview/AllReview";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Dashboard from "./Components/Dashboard/Dashboard";
import Details from "./Components/Details/Details";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import ManageAllUser from "./Components/manageAllUser/ManageAllUser";
import ManageItems from "./Components/ManageItems/ManageItems";
import ManageOrder from "./Components/ManageOrder/ManageOrder";
import MyItems from "./Components/MyItems/MyItems";
import NotFound from "./Components/NotFound/NotFound";
import Portfolio from "./Components/Portfolio/Portfolio";
import Profile from "./Components/Profile/Profile";

import RequireAuth from "./Components/RequireAuth";
import SignUp from "./Components/SignUp/SignUp";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/products"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/details/:id"
          element={
            <RequireAuth>
              <Details></Details>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          
          <Route
            path="manageItems"
            element={
              <RequireAuth>
                <ManageItems></ManageItems>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="addItems"
            element={
              <RequireAuth>
                <AddItems></AddItems>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile></Profile>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="manageOrder"
            element={
              <RequireAuth>
                <ManageOrder></ManageOrder>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="manageAllUser"
            element={
              <RequireAuth>
                <ManageAllUser></ManageAllUser>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="allReview"
            element={
              <RequireAuth>
                <AllReview></AllReview>
              </RequireAuth>
            }
          ></Route>
          <Route
            index
            element={
              <RequireAuth>
                <MyItems></MyItems>
              </RequireAuth>
            }
          ></Route>
        </Route>

        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
