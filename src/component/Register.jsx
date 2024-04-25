
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import RegisterValidation from './registerValidation'

import "../styles/Register.css"
import validation from './validation';

function Register() {

  const[values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  })

  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: event.target.value}))
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    setErrors(RegisterValidation(values));

    if(errors.name === "" && errors.email === "" && errors.password === ""){
      axios.post("http://127.0.0.1:8081/pregister", values)
      .then(res => {
        navigate("/");

      })
      .catch(err => console.log(err));
    }

  }

 



  


  return (
    <div className='loginContainerr' >
      <form className='loginFormr' onSubmit={handleSubmit}>
      <div className='flogin1r'>
        <h2 className='fH2r'>Login</h2>
        <hr className='fHRr' />
        </div>

      <div className='formLbIpr'> 
       <label className='flabler' htmlFor="name">Name</label>
       <input className='lFieldr'  onChange={handleInput} type="text" name="name" id="name" placeholder='ENTER NAME'/>
       {errors.name && <span>{errors.name}</span>}
       </div>


       <div className='formLbIpr'> 
       <label className='flabler' htmlFor="email">Email</label>
       <input className='lFieldr'  onChange={handleInput}  type="email" name="email" id="email" placeholder='ENTER EMAIL'/>
       {errors.email && <span>{errors.email}</span>}
       </div>


       <div className='formLbIpr'> 
       <label className='flabler' htmlFor="password">Password</label>
       <input className='lFieldr' onChange={handleInput}  type="password" name="password" id="password" placeholder='ENTER PASSWORD'/>
       {errors.password && <span>{errors.password}</span>}
       </div>

       <div><button className='fbtnTr'   type='submit'>Register</button></div>
       <Link to="/" className='fbtnTTr' >Login</Link>

      </form>

      
    </div>

  )
}

export default Register


// onClick={() =>props.onFormSwitch("login")}