import React,{useEffect,useState} from "react";
import "../../styles/Ecommerce/ecommerce.css";
import Products from './components/body/Products.jsx';
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Body from "./components/body/Body.jsx";
import { useUser } from '../user/UserContext.jsx';
import Header2 from "./components/header/Header2.jsx";

export default function Ecommerce() {
    
    return (
        <>
            <>
            
                <ToastContainer />
                <Header />
                <Header2 />
                <Body />
            </>

        </>
    )
}