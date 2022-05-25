import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddItems from './Components/AddItems/AddItems';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Dashboard from './Components/Dashboard/Dashboard';
import Details from './Components/Details/Details';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import ManageItems from './Components/ManageItems/ManageItems';
import MyItems from './Components/MyItems/MyItems';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/RequireAuth';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/inventory' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>
        <Route path="/details/:id" element={
          <RequireAuth>
            <Details></Details>
          </RequireAuth>
        }></Route>
        <Route path="/manageItems" element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          
        </Route>
        <Route path="/addItems" element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path="/myItems" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
