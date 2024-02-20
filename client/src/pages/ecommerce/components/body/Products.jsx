import React,{useState,useEffect } from 'react'
// import all_products from '../../../../all_products.js'; // Import your data from all_products.js
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useUser } from '../../../user/UserContext.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Products () {
  const { user } = useUser();
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://gvk-ecommerce-api.vercel.app/api/v2/ecommerce/fetchProducts`);
      
      const data = await response.json();
      if (data.success === true) {
        setProducts(data.allpro);
      } else {
        console.error('Error fetching product data');
      }
    }catch (error) {
      console.error('Fetch error:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToWishlist = async(productId) => {
    try{
      const res = await axios.post(`http://localhost:9002/api/v2/ecommerce/addToWishlist`,{productId: productId,
      user:user});
      if(res.data.success === true){
        toast.success('Product Added to Wishlist successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log("product added successfully")
      }
    }
    catch (error) {
      console.error('Fetch error:', error.message);
    }
  }
  const handleAddToCart = async (productId) => {
    try {
      const response = await axios.post('http://localhost:9002/api/v2/ecommerce/addToCart', {
        productId: productId,
        user:user
      });
      console.log(response);
      if (response.data.success === true) {
        toast.success('Product Added to cart successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

      } else {
        console.error('Error adding product to cart');
      }
    } catch (error) {
      console.error('Add to cart error:', error.message);
    }
  };
  
  return (

    <div className='col'>
     {products.map((product) => (
        <div
          className='product-card product-item'  key={product._id}
        >
          <div className='main-images'>
            <img
              src={product.imgUrl}
              alt={product.name}
              className='tab-image'
            />
            
              <div className='heart'>
                <i className='fa-solid fa-heart'></i>
              </div>
          </div>
          <div className='shoe-details'>
            <div className='shoe_name'>{product.name}</div>
          </div>
          <div className='color-price'>
            <div className='price'>
              <span className='price price_num'>${product.price}</span>
            </div>
          </div>
          <button type='button' onClick={() => handleAddToCart(product._id)} style = {{ color : 'white' , fontWeight : 'bold' , padding : '5px 15px' , fontSize : '20px' ,  marginTop : '7px'}}>


              Add to Cart

          </button>
        </div>
      ))}
    </div>
  )
}

export default Products
