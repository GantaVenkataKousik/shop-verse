import React from 'react';
import Navbar from '../components/NavBar.jsx';
import Sidebar from '../components/sidebar.jsx';
import Products from "./product/Products.jsx";
import "../../../styles/Admin/admindelete.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Delete() {
    return (
        <>
            <ToastContainer />
            <div className="admin-delete">
                <Sidebar />
                <section className="home-section">
                    <Navbar />
                    <Products />
                </section>
            </div>
        </>
    )
}

export default Delete;