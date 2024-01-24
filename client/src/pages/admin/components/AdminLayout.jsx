import react from 'react';
import "../../../styles/Admin/adminLayout.css";
import Sidebar from "./sidebar.jsx";
import Navbar from './NavBar.jsx';

function AdminLayout() {
    return (
        <>
            <div className='adminDashboard'>
                <Sidebar />
                <section className="home-section">
                    <Navbar />
                </section>
            </div>
        </>

    )
}

            export default AdminLayout();