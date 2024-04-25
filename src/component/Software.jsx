import React, { useState } from 'react'
import Header from './Header'
import Note from './Note'
import Footer from './Footer'
import Styles from '../styles/App.css'
import notes from '../notes'
import Textarea from './Textarea'

function Software() {
    const [ notes, setNotes] = useState([]);

    
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
    <div>  <Header />
    <Textarea onAdd={addNote} />
    <div className='noteContainer'>{notes.map((noteItem, index) => {
      return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
    })}
    </div>
    <Footer /> </div>
  )
}

export default Software