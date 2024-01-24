import React,{useState} from 'react';
import {NavLink} from "react-router-dom"
import logo from '../../Images/GVK2.png'; 

export default function Header() {
  return (
    <>
      <header style={{ color: 'black'}} >
        <div className="container-fluid">
          <div className="row py-3 border-bottom">
            <div className="col-sm-4 col-lg-3 text-center text-sm-start">
              <div className="main-logo">
                <NavLink to="index.html">
                  <img src={logo} alt="logo" className="img-fluid" />
                </NavLink>
              </div>
            </div>
            <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block ml-auto">
              <div className="search-bar row bg-light p-2 my-2 rounded-4">
                <div className="col-md-4 d-none d-md-block">
                  <select className="form-select border-0 bg-transparent">
                    <option>All Categories</option>
                    <option>CLOTHES</option>
                    <option>DRINKS</option>
                    <option>GADGETS</option>
                  </select>
                </div>
                <div className="col-11 col-md-7">
                  <form
                    id="search-form"
                    className="text-center"
                    action="index.html"
                    method="post"
                  >
                    <input
                      type="text"
                      id="input"
                      className="form-control border-0 bg-transparent"
                      placeholder="Search for more than 20,000 products"
                    />
                  </form>
                </div>
                <div className="col-1 search-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
              <ul className="d-flex justify-content align-items-center list-unstyled m-0">
                <li>
                  <NavLink to="/ecommerce" className="rounded-circle bg-light p-2 mx-1">
                  <i class="fa-solid fa-house"></i>
                  </NavLink>
                </li>
                <li className="d-flex align-items-center">
                  <span className="text-muted fs-6 p-0 m-0">
                    
                  </span>
                  <NavLink
                    to="/user/dashboard?userid=<%= encodeURIComponent(userid) %>"
                    className="rounded-circle d-flex text-decoration-none btn-wishlist bg-light p-2 mx-1"
                  >
                    <i class="fa-solid fa-user"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/wishlist?userid=<%= encodeURIComponent(userid) %>"
                    className="rounded-circle btn-wishlist bg-light p-2 mx-1"
                  >
                    <i class="fa-solid fa-heart"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/location"
                    className="rounded-circle btn-wishlist bg-light p-2 mx-1"
                  >
                    <i class="fa-solid fa-location-dot"></i>
                  </NavLink>
                </li>
                <li className="d-lg-none">
                  <NavLink
                    to="#"
                    className="rounded-circle bg-light p-2 mx-1"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasCart"
                    aria-controls="offcanvasCart"
                  >
                    <i class="fa-solid fa-cart-shopping"></i>
                  </NavLink>
                </li>
                <li className="d-lg-none">
                  <NavLink
                    to="#"
                    className="rounded-circle bg-light p-2 mx-1"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasSearch"
                    aria-controls="offcanvasSearch"
                  >
                    <svg width={24} height={24} viewBox="0 0 24 24">
                      <use xlinkto="#search" />
                    </svg>
                  </NavLink>
                </li>
              </ul>
              <div className="cart text-end d-none d-lg-block dropdown">
                <button
                  className="border-0 bg-transparent d-flex flex-column gap-2 lh-1"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasCart"
                  aria-controls="offcanvasCart"
                >

                  <NavLink to="/ecommerce/cart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={22}
                      fill="currentColor"
                      className="cart bi bi-cart"
                      viewBox="0 0 16 16"
                      id="cart-text"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>

      </header>

    </>
  )
}
