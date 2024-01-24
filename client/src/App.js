import React from 'react';
import Login from './pages/user/Login.jsx';
import Register from './pages/user/Register.jsx';
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Ecommerce from "./pages/ecommerce/Ecommerce.jsx";
import Admin from "./pages/admin/Admin.jsx";
import "./App.css";
import Cart from "./pages/ecommerce/Cart.jsx";
import ThankYou from "./pages/ecommerce/ThankYou.jsx";
import Delete from "./pages/admin/pages/Delete.jsx";

function App () {
  const notify = () => toast.success('You are successfully logged In!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });;
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/ecommerce/cart" element={<Cart />} />
        <Route path="/ecommerce/cart/checkout" element={<ThankYou />} />
        <Route path="/admin/dashboard" element={<Admin />}/>
        <Route path="/admin/delete" element={<Delete />} />

      </Routes>
    </>
  );
}
export default App;
