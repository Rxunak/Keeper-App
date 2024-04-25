import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Validation from './validation'
import axios from 'axios';

import "../styles/Login.css"

function Login() {
  const[values, setValues] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.email === "" && errors.password === ""){
      axios.post("http://127.0.0.1:8081/loginp", values)
      .then(res => {
        if(res.data === "Success"){
          navigate("/textarea");

        }else{
          alert("No record existed");
        }
       


      })
      .catch(err => console.log(err));
    }
  }



  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState({});
  

 

  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email);
  //   const validationErrors = {};

  //   if (!email.trim()) {
  //     validationErrors.email = "Email is required";
  //   }

  //   if (!password.trim()) {
  //     validationErrors.password = "Password is required";
  //   }

  //   setErrors(validationErrors);

  //   if (Object.keys(validationErrors).length === 0) {
  //     alert("Form submitted");
      
  //   }
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === 'email') {
  //     setEmail(value);
  //   } else if (name === 'password') {
  //     setPassword(value);
  //   }
  // };



  return (
    <div className='loginContainer' >
      <form className='loginForm'  onSubmit={handleSubmit}>
        <div className='flogin1'>
        <h2 className='fH2'>Login</h2>
        <hr className='fHR' />
        </div>
        
        <div className='formLbIp'>
        <label className='flable' htmlFor="email">Email</label>
        <input
        className='lField'
         
          onChange={handleInput}
          type="email"
          name="email"
          id="email"
          placeholder="ENTER EMAIL"
        />
        {errors.email && <span>{errors.email}</span>}

        </div>
        
    
        <div className='formLbIp'>
        <label className='flable'  htmlFor="password">Password</label>
        <input
          className='lField'
        
          onChange={handleInput}
          type="password"
          name="password"
          id="password"
          placeholder="ENTER PASSWORD"
        />
        {errors.password && <span>{errors.password}</span>}

        </div>
        
        <div><button className='fbtnT' type="submit">Login</button></div>
        <div className='regiBtn'><Link to="/register" className='fbtnTT' >Register</Link></div>
        
      </form>

     
    </div>
  );
}

export default Login;

// onClick={() => props.onFormSwitch("register gray")}