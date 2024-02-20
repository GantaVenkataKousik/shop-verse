import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/Ecommerce/cart.css";
import { useUser } from '../user/UserContext.jsx';
import Header from "./components/header/Header.jsx";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Cart() {
    const { user } = useUser();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    const checkout = async () => {
        const res = await axios.post('https://gvk-ecommerce-api.onrender.com/api/v2/ecommerce/cart/checkout', { user: user });
        console.log(res);
        if (res.data.success === true) {

            navigate("/ecommerce/cart/checkout");
        };
    }

    const displayPro = async () => {

        const res = await axios.post('http://localhost:9002/api/v2/ecommerce/displayCart', { user: user });
        if (res.data.success === true) {
            const products = res.data.products;

            toast.success(res.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

            setProducts(products);
        }
    }

    const removeProduct = async (productId,event) => {
        event.preventDefault();
        try {
            const res = await axios.post('http://localhost:9002/api/v2/ecommerce/cart/removeProduct', { productId });

            if (res.data.success === true) {
                toast.success(res.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                displayPro();
            }
        }
        catch (err) {

        }

    }

    useEffect(() => {
        displayPro();
    }, []);

    return (
        <>
            <>
                <ToastContainer />
                <Header />
                <div className="Cart-Container" >
                    <div className="Header">
                        <h3 className="Heading">Shopping Cart</h3>
                        <h5 className="Action" style={{color:'red',fontSize:'25px'}}>
                                Remove all
                        </h5>
                    </div>
                    {products.map((product) => (
                        <div className="Cart-Items" key={product._id}>
                            <div className="image-box">
                                <img src={product.imgUrl} alt="Product" />
                            </div>
                            <div className="about">
                                <h1 className="title">{product.name}</h1>
                            </div>
                            <div className="counter">
                                <button className="plus-btn" data-product={product._id}>
                                    +
                                </button>
                                <div className="count" data-product={product._id}>
                                    1
                                </div>
                                <button className="minus-btn" data-product={product._id}>
                                    -
                                </button>
                            </div>
                            <div className="prices" >
                                <div className="price" data-product={product._id} style={{ color: "black", fontWeight: 'bold' }}>
                                    ${product.price}
                                </div>
                                <div className="save">
                                    <a href="#">Save for later</a>
                                </div>
                                <div className="remove">
                                    <NavLink to='#' style={{ color: 'red' }} onClick={(event) => removeProduct(product._id, event)}>
                                        Remove
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                    <hr />
                    <div className="ck">
                        <div className="total">
                            <div>
                                <div className="Subtotal">Sub-Total</div>
                                <div className="items">{products.length} items</div>
                            </div>
                            <div id="total-amount" />
                        </div>
                        <button className="checkout button" onClick={checkout}>Checkout</button>
                    </div>
                </div>

            </>

        </>
    )
}