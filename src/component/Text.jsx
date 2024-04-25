import React, { useState } from 'react'
import Header from './Header'
import Note from './Note'
import Footer from './Footer'
import Textarea from './Textarea'
import '../styles/Text.css'









function Text() {

  const [ notes, setNotes] = useState([]);

  const [currentForm, setCurrentForm] = useState("register");

  const toggleForm = (formName) =>{
    setCurrentForm(formName);

  }


  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) =>{
        return index !== id;
        
      });
    });

  }



  return (


    <div className='main-container'>
     
     <Textarea onAdd={addNote} />
     <div className='noteContainer'>{notes.map((noteItem, index) => {
       return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
     })}
     </div>
    
     
   </div>

 
    


  )
}

export default Text