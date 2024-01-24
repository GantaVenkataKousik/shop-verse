import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname == path;
    };

    return (
        <div className="sidebar">
            <div className="logo-details">
                <span className="logo_name">GVK</span>
            </div>
            <ul className="nav-links">
                <li>
                    <NavLink to="/admin/dashboard" className={isActive('/admin/dashboard') ? 'active' : ''} exact>
                        <i class="fa-solid fa-paperclip"></i>
                        <span className="links_name">Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/customers" className={isActive('/admin/customers') ? 'active' : ''}>
                        <i className="fa-solid fa-user"></i>
                        <span className="links_name">Customers</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/orders" className={isActive('/admin/orders') ? 'active' : ''}>
                        <i className="fa-solid fa-truck-fast"></i>
                        <span className="links_name">Orders</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/favourites" className={isActive('/admin/favourites') ? 'active' : ''}>
                        <i className="fa-solid fa-heart"></i>
                        <span className="links_name">Favourites</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/products" className={isActive('/admin/products') ? 'active' : ''}>
                        <i class="fa-solid fa-industry"></i>
                        <span className="links_name">Products</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/total-orders" className={isActive('/admin/total-orders') ? 'active' : ''}>
                        <i className="fa-solid fa-sack-dollar"></i>
                        <span className="links_name">Total orders</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/addnewproduct" className={isActive('/admin/addnewproduct') ? 'active' : ''}>
                        <i className="fa-solid fa-circle-plus"></i>
                        <span className="links_name">Add Product</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/update" className={isActive('/admin/update') ? 'active' : ''}>
                        <i className="fa-regular fa-circle-check"></i>
                        <span className="links_name">Update</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/delete" className={isActive('/admin/delete') ? 'active' : ''}>
                        <i className="fa-solid fa-trash-can"></i>
                        <span className="links_name">Delete</span>
                    </NavLink>
                </li>
                <li className="log_out">
                    <NavLink to="/login">
                    <i class="fa-solid fa-arrow-left-long"></i>
                        <span className="links_name">logout</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
