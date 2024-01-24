import React from 'react';
import Orders from "./Orders.jsx"
import Analysis from "./Analysis.jsx"
import Navbar from '../../components/NavBar.jsx';
import Sidebar from '../../components/sidebar.jsx';

function Statistics() {
    return (
        <>
                <Sidebar />
                <section className="home-section">
                    <Navbar />
                    <div className="home-content">
                    <Analysis />
                    <div className="sales-boxes">
                        <Orders />
                    </div>
                </div>
                </section>
            
        </>
    )
}

export default Statistics;