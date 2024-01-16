import React, { useEffect, useState } from 'react'
import "./NoteApp.css"



export default function WriteArea(props) {
   

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    useEffect(()=>{
      alert('hello')
      
    })

    const[expand,setExpand]=useState(false);

    const inputHandler = (event) => {
        const value = (event.target.value);
        const name = (event.target.name);

        setNote((oldValue) => {
            console.log(oldValue);
            return {
                ...oldValue,
                [name]: value
            }
        })
    }

    const addEvent=()=>{
        if((note.title.length && note.content.length)===0){
            alert("Enter Something Here...")
        }else{
            props.passNote(note);
        }
       
        setNote({
            title: "",
            content: "",
        })
       
    }

    const expandit=()=>{
       setExpand(true);
    }

    

    


    return (
        <>
            <div className='text-div'>
                <input type='text' onClick={expandit} value={note.title} name='title' onChange={inputHandler} placeholder='Title' className='title' autoComplete='off'></input>
                <br />
                {expand?
                <textarea type="text" maxLength={50} value={note.content} name='content' onChange={inputHandler} placeholder='Write a note...' className='textarea' autoComplete='off'></textarea>
                :null}
                <button  className='add-button'  onClick={addEvent}>
                   <span>+</span>
                </button>
            </div>
        </>
    )
}
