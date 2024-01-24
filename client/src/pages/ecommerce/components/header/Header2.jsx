


import React,{useState} from 'react';
import {NavLink} from "react-router-dom"

export default function Header2() {
  return (
    <>
      <header>
      <div className="container-fluid">
          <div className="row py-3">
            <div className="d-flex  justify-content-center justify-content-sm-between align-items-center">
              <nav className="main-menu d-flex navbar navbar-expand-lg">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="offcanvas offcanvas-end"
                  tabIndex={-1}
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                >
                  <div className="offcanvas-header justify-content-center">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div className="offcanvas-body">
                    <select className="filter-categories border-0 mb-0 me-5">
                      <option>Shop by Departments</option>
                      <option>Groceries</option>
                      <option>Drinks</option>
                      <option>Chocolates</option>
                    </select>
                    <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                      <li className="nav-item active">
                        <NavLink to="#women" className="nav-link">
                          Women
                        </NavLink>
                      </li>
                      <li className="nav-item dropdown">
                        <NavLink to="#men" className="nav-link">
                          Men
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="#kids" className="nav-link">
                          Kids
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="#accessories" className="nav-link">
                          Accessories
                        </NavLink>
                      </li>
                      <li className="nav-item dropdown">
                        <NavLink
                          className="nav-link dropdown-toggle"
                          role="button"
                          id="pages"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Pages
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="pages">
                          <li>
                            <NavLink to="about.html" className="dropdown-item">
                              About Us{" "}
                              <span className="badge bg-success text-dark ms-2">
                                PRO
                              </span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="shop.html" className="dropdown-item">
                              Shop{" "}
                              <span className="badge bg-success text-dark ms-2">
                                PRO
                              </span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="single-product.html" className="dropdown-item">
                              Single Product{" "}
                              <span className="badge bg-success text-dark ms-2">
                                PRO
                              </span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="cart.html" className="dropdown-item">
                              Cart{" "}
                              <span className="badge bg-success text-dark ms-2">
                                PRO
                              </span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="checkout.html" className="dropdown-item">
                              Checkout{" "}
                              <span className="badge bg-success text-dark ms-2">
                                PRO
                              </span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="blog.html" className="dropdown-item">
                              Blog{" "}
                              <span className="badge bg-success text-dark ms-2">
                                PRO
                              </span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="single-post.html" className="dropdown-item">
                              Single Post{" "}
                              <span className="badge bg-success text-dark ms-2">
                                PRO
                              </span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="styles.html" className="dropdown-item">
                              Styles{" "}
                              <span className="badge bg-success text-dark ms-2">
                                PRO
                              </span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="contact.html" className="dropdown-item">
                              Contact{" "}
                              <span className="badge bg-success text-dark ms-2">
                                PRO
                              </span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="thank-you.html" className="dropdown-item">
                              Thank You{" "}
                              <span className="badge bg-success text-dark ms-2">
                                PRO
                              </span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="account.html" className="dropdown-item">
                              My Account{" "}
                              <span className="badge bg-success text-dark ms-2">
                                PRO
                              </span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="404.html" className="dropdown-item">
                              404 Error{" "}
                              <span className="badge bg-success text-dark ms-2">
                                PRO
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <NavLink to="#brand" className="nav-link">
                          Brand
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="#sale" className="nav-link">
                          Sale
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="#blog" className="nav-link">
                          Blog
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

      </header>

    </>
  )
}
