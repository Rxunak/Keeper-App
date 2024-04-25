import React from 'react'
import Styles from '../styles/Note.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';
import { useEffect } from 'react';


function Note(props) {

  // useEffect(()=>{
  //   axios.get("http://127.0.0.1:8081/register", {title: props.title, content: props.content})
  //   .then(response => console.log(response))
  //   .catch(err => console.log(err))
  // })


  function handleClick(){
    props.onDelete(props.id);

  }

  return (
    
   
      <div className='noteDiv'>
        <h1 className='noteH1'>{props.title}</h1>
        <p className='noteP'>{props.content}</p>
        <div className='btnClass'>
        <button className="noteBTN" onClick={handleClick}><DeleteForeverIcon/></button>

        </div>
        
      </div>

  )
}

export default Note