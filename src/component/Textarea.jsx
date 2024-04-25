
import React, { useState, useEffect } from 'react';
import '../styles/Textarea.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import axios from 'axios';

function Textarea() {
  const [noteErrors, setNoteErrors] = useState({});
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({ title: "", content: "" });

  useEffect(() => {
    axios.get("http://127.0.0.1:8081/register")
      .then(response => {
        setNotes(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({ ...prevNote, [name]: value }));
  }

  function submitNote(event) {
    event.preventDefault();
    const errors = validate(note);
    setNoteErrors(errors);
    if (Object.keys(errors).length === 0) {
      axios.post("http://127.0.0.1:8081/register", { title: note.title, content: note.content })
        .then(response => {
          setNotes([...notes, response.data]);
        })
        .catch(err => console.log(err));
      setNote({ title: "", content: "" });
      setNoteErrors({});
    } else {
      console.log("Validation errors:", errors);
    }
  }

  function deleteNote(id) {
    axios.delete(`http://127.0.0.1:8081/register/${id}`)
      .then(response => {
        console.log("Note deleted successfully from the backend:", response.data);
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
      })
      .catch(err => console.log(err));
  }

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Title is required";
    }
    if (!values.content) {
      errors.content = "Note is required";
    }
    return errors;
  };

  return (
    
      
      <div className='maindiv10'>
        <div className='text-div'>
          <form className='form'>
            <p>{noteErrors.title}</p>
            <input className="tTitle" name="title" value={note.title} placeholder='Title' onChange={handleChange} />
            <p>{noteErrors.content}</p>
            <textarea className='tArea' name="content" value={note.content} cols="30" placeholder="Take a note.." rows="3" onChange={handleChange} ></textarea>
            <Zoom in={true}><div className='tB'><Fab className='fBtn' onClick={submitNote}><AddCircleIcon /></Fab></div></Zoom>
          </form>
          <div className='noteContainer'>
            {notes.map((noteItem) => <Note key={noteItem.id} id={noteItem.id} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />)}
          </div>
        </div>
      </div>
     
    
  );
}

export default Textarea;

