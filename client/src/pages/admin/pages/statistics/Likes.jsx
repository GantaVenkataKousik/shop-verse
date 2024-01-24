import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Likes() {

    const [likes,setLikes] = useState([]);

    const fetchLikes = async()=>{

        const res = await axios.post(`http://localhost:9002/api/v3/admin/likes`);

        if(res && res.data.success){
            setLikes( res.data.likes);
        }
    }

    useEffect(() => {
        fetchLikes();
      }, []);

    return (
        <>
            <div className="top-sales box">
                <div className="title">Top Liked Products</div>
                <ul className="top-sales-details">
                    {likes.map((product) => (
                        <li key={product.productName}>
                            <NavLink to={`/product/${product.productName}`}>
                                <img src={product.product[0].imgurl} alt={product.productName} />
                                <span className="product">{product.productName}</span>
                            </NavLink>
                            <span className="prices likes">{product.likes} likes</span>
                            <span className="price">${product.product[0].price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
