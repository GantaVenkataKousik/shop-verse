import Image from "./Image"
import Footer from "../../components/Footer";
import "../../styles/user/Register.css";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import registerImage from "./images/register.jpg";

const notify = ()=>{
  toast.success('Registration!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
    
}

export default function Register() {
  
  const navigate = useNavigate();
  const[name,setName] = useState("");
  const [email,setEmail] = useState("");
  const[password,setPassword] = useState("");

 

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
        const res = await axios.post(
          `https://gvk-ecommerce-api.vercel.app/api/v1/auth/register`,
          {name,email,password}
        )
        if(res && res.data.success){
          navigate("/login");
        }
        else{
        }
    }
    catch(err){
        console.error("Unexpected error");
    }
  }
  return (
    <>
    
      <div className="registerContainer" style={{ color: 'black'}} >
        <ul className='circles'>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
        <section>
        <div className="img-wrapper">
            <img src={registerImage} />
         </div>
          <div className='wrapper'>
            <header>SignUp</header>
            <form onSubmit={handleSubmit}>
              <div className='field email'>
                <div className='input-area'>
                  <input type='email' name='email' placeholder='Email Address' onChange={(e)=>{
                    setEmail(e.target.value);
                  }} />
                  <i className='icon fas fa-envelope' />
                  <i className='error error-icon fas fa-exclamation-circle' />
                </div>
                <div className='error error-txt'>Email can't be blank</div>
              </div>
              <div className='field name'>
                <div className='input-area'>
                  <input type='text' name='name' placeholder='Enter Name' onChange={(e)=>{
                    setName(e.target.value);
                  }} />
                  <i className='icon fas fa-envelope' />
                  <i className='error error-icon fas fa-exclamation-circle' />
                </div>
                <div className='error error-txt'>Name can't be blank</div>
              </div>
              <div className='field password'>
                <div className='input-area'>
                  <input type='password' name='password' placeholder='Password' onChange={(e)=>{
                    setPassword(e.target.value);
                  }} />
                  <i className='icon fas fa-lock' />
                  <i className='error error-icon fas fa-exclamation-circle' />
                </div>
                <div className='error error-txt'>Password can't be blank</div>
              </div>
              <div className='field confirm-password'>
                <div className='input-area'>
                  <input
                    type='password'
                    placeholder='Confirm-Password'
                    name='confirmPassword'
                  />
                  <i className='icon fas fa-lock' />
                  <i className='error error-icon fas fa-exclamation-circle' />
                </div>
                <div className='error error-txt'>Password can't be blank</div>
              </div>
              <input type='submit' defaultValue='Register' />
              <div className='sign-txt'>
                Already Registered? <a href='/login'>Login now</a>
              </div>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
