import React from 'react'
import "./NoteApp.css"
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function SaveNote(props) {
    let btnStyle =
    {
        color: "#F1BD02",
        borderRadius: "60%",
        backgroundColor: "white",
        marginTop: "5px",
        position: "relative",
        left: "139px",
        
    }

    const deleteItem=()=>{
        props.removeNote(props.id);
    }
  return (
    <>
    <div className='save-note'>
       <h3>{props.title}</h3>
       <p>{props.content}</p>
       <button className='delete-button' /*style={btnStyle} */ onClick={deleteItem}>
           <span>-</span>
       </button>
    </div>
    </>
  )
}
