// SearchBar.js
import React from 'react'

function SearchBar () {
  return (
    <div className='col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block ml-auto'>
      <div className='search-bar row bg-light p-2 my-2 rounded-4'>
        <div className='col-md-4 d-none d-md-block'>
          <select className='form-select border-0 bg-transparent'>
            <option>All Categories</option>
            <option>CLOTHES</option>
            <option>DRINKS</option>
            <option>GADGETS</option>
          </select>
        </div>
        <div className='col-11 col-md-7'>
          <form
            id='search-form'
            className='text-center'
            action='index.html'
            method='post'
          >
            <input
              type='text'
              id='input'
              className='form-control border-0 bg-transparent'
              placeholder='Search for more than 20,000 products'
            />
          </form>
        </div>
        <div className='col-1 search-box'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
