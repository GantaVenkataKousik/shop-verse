import React, { useState } from 'react';
import Statistics from './pages/statistics/Statistics.jsx';
import "../../styles/Admin/adminDashboard.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Admin() {

    const [darkMode, setDarkMode] = useState(false);

    const darkModeStyles = {
        backgroundColor: 'black',
        color: '#fff',
        height: '100%',
        transition: 'background-color 0.2s ease-in-out',
    };

    // Define inline styles for light mode
    const lightModeStyles = {
        backgroundColor: '#fff',
        color: 'black',
        height: '100%',
        transition: 'background-color 0.2s ease-in-out',
    };

    return (
        <>

            <ToastContainer />
            <div style={darkMode ? darkModeStyles : lightModeStyles} >
                    
                    <div className="adminDashboard" >

                    
                    <Statistics />
                </div>
            </div>
            
            
        </>
    );
}
