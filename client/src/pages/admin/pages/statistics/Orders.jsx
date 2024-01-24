import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function Orders() {

    const [orders,setOrders] = useState([]);

    const fetchOrders = async()=>{

        const res = await axios.post(`http://localhost:9002/api/v3/admin/orders`);
        console.log(res);
        if(res && res.data.success){
            setOrders( res.data.orders);
        }
    }

    useEffect(() => {
        fetchOrders();
      }, []);

    return (
        <>
            <div className="recent-sales box">
                <div className="title">All Sales</div>
                <div className="sales-details">
                    <div className="heading">
                        <li className="topic customer">Customer</li>
                        <li className="topic">Product</li>
                        <li className="topic">Total</li>
                    </div>
                    {orders.map((product, index) => (
                        <ul className="details" key={index}>
                            
                            <li className="customer">
                                <NavLink to={`/customer/${product.username}`}> {/* Update the path as needed */}
                                    {product.username}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={`/product/${product.name}`}> {/* Update the path as needed */}
                                    {product.name}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={`/sale/${product.id}`}> {/* Update the path as needed */}
                                    ${product.price}
                                </NavLink>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </>
    );
}
