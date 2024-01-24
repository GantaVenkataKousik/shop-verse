import React from "react";
import Kousik from '../images/k2.jpg';

function NavBar() {
    return (
        <>
            <nav>
                <div class="sidebar-button">
                    <i class='bx bx-menu sidebarBtn'></i>
                    <span class="dashboard">Dashboard</span>
                </div>

                <div class="profile-details">
                    <img src={Kousik} alt="" /> 
                        <span class="admin_name"
                        style={{ color:'black',fontSize:'19px',fontWeight:"500"}}>Ganta Venkata Kousik</span>

                </div>
            </nav>

        </>
    )
}

export default NavBar;
