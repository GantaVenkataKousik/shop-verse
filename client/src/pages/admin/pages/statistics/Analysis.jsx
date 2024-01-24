import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default function Analysis() {

    const [ordered,setOrdered] = useState([]);
    const [InCart,setInCart] = useState([]); 
    const [customers,setCustomers] = useState([]);
    const [totalSales,setTotalSales] = useState(0);

    const fetchAnalysis = async()=>{

        const res = await axios.post(`http://localhost:9002/api/v3/admin/analysis`);
        if(res && res.data.success){
            setCustomers( res.data.customers);
            setInCart(res.data.InCart);
            setOrdered(res.data.Ordered);
            let totalSales = 0;
            res.data.Ordered.forEach((product)=>{
                totalSales += product.price;
            })
            setTotalSales(totalSales);
        }
    }
    useEffect(() => {
        fetchAnalysis();
      }, []);

  const totalOrders = ordered.length;
  const totalProductsInCart = InCart.length;
  const totalCustomers = customers.length;
   
  return (
    <div className="overview-boxes">
      <div className="box">
        <div className="right-side">
          <div className="box-topic">Total Orders</div>
          <div className="number">{totalOrders}</div>
        </div>
        <i className="bx bx-cart-alt cart" />
      </div>
      <div className="box">
        <div className="right-side">
          <div className="box-topic">Total Sales</div>
          <div className="number">${totalSales.toFixed(2)}</div>
        </div>
        <i className="bx bxs-cart-add cart two" />
      </div>
      <div className="box">
        <div className="right-side">
          <div className="box-topic">In cart for Order</div>
          <div className="number">{totalProductsInCart}</div>
        </div>
        <i className="bx bx-cart cart three" />
      </div>
      <div className="box">
        <div className="right-side">
          <div className="box-topic">Total customers</div>
          <div className="number">{totalCustomers}</div>
        </div>
        <i className="bx bxs-cart-download cart four" />
      </div>
    </div>
  );
}
