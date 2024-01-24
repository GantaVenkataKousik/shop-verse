// UserActions.js
import React from 'react'
import {NavLink} from 'react-router-dom';

function UserActions () {
  return (
    <div className='col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end'>
      <ul className='d-flex justify-content align-items-center list-unstyled m-0'>
        <li>
          <a href='/ecommerce' className='rounded-circle bg-light p-2 mx-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}
              fill='currentColor'
              className='bi bi-house'
              viewBox='0 0 16 16'
            >
              <path d='M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z' />
            </svg>
          </a>
        </li>
        <li className='d-flex align-items-center'>
          <span className='text-muted fs-6 p-0 m-0'>
            Hi, &lt;%= username.split(' ')[0].charAt(0).toUpperCase() +
            username.split(' ')[0].slice(1) %&gt;
          </span>
          <a
            href='/user/dashboard?userid=<%= encodeURIComponent(userid) %>'
            className='rounded-circle d-flex text-decoration-none btn-wishlist bg-light p-2 mx-1'
          >
            <svg width={24} height={24} viewBox='0 0 24 24'>
              <use xlinkHref='#user' />
            </svg>
          </a>
        </li>
        <li>
          <a
            href='/wishlist?userid=<%= encodeURIComponent(userid) %>'
            className='rounded-circle btn-wishlist bg-light p-2 mx-1'
          >
            <svg width={24} height={24} viewBox='0 0 24 24'>
              <use xlinkHref='#heart' />
            </svg>
          </a>
        </li>
        <li>
          <a
            href='/location'
            className='rounded-circle btn-wishlist bg-light p-2 mx-1'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={16}
              height={16}
              fill='currentColor'
              className='bi bi-geo-alt-fill'
              viewBox='0 0 16 16'
            >
              <path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z' />
            </svg>
          </a>
        </li>
        <li className='d-lg-none'>
          <a
            href='#'
            className='rounded-circle bg-light p-2 mx-1'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasCart'
            aria-controls='offcanvasCart'
          >
            <svg width={24} height={24} viewBox='0 0 24 24'>
              <use xlinkHref='#cart' />
            </svg>
          </a>
        </li>
        <li className='d-lg-none'>
          <a
            href='#'
            className='rounded-circle bg-light p-2 mx-1'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasSearch'
            aria-controls='offcanvasSearch'
          >
            <svg width={24} height={24} viewBox='0 0 24 24'>
              <use xlinkHref='#search' />
            </svg>
          </a>
        </li>
      </ul>
      <div className='cart text-end d-none d-lg-block dropdown'>
        <button
          className='border-0 bg-transparent d-flex flex-column gap-2 lh-1'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasCart'
          aria-controls='offcanvasCart'
        >
          <NavLink to='/cart'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={22}
              height={22}
              fill='currentColor'
              className='cart bi bi-cart'
              viewBox='0 0 16 16'
              id='cart-text'
            >
              <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
            </svg>
            </NavLink>
        </button>
      </div>
    </div>
  )
}

export default UserActions
