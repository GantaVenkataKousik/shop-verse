import React, { useEffect } from 'react';
import "../../styles/Ecommerce/thankyou.css"
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ThankYou() {

    const showToast = async() =>{
        toast.success("Order placed", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    useEffect(async () => {
        showToast();
    },[]);
    return (
        <>
            <ToastContainer />
            <div className='thankyou' style={{ fontSize: '25px' }}>
                <section>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <h1>THANK YOU</h1>
                        <h2>Your Order has been Successfully placed</h2>
                    </div>
                </section>
                <footer >
                    <p style={{ color: 'black' }}>©copyright | <h1 style={{ color: 'black', fontWeight: 'bold' ,display:'inline-block' ,fontSize : '24px'}}>GantaVenkataKousik </h1>  |  2023</p>
                </footer>
            </div>
            <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
            />
        </>

    )
}