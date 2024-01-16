import React, { useState } from 'react'
import Navbar from './NoteApp/Navbar'
import WriteArea from './NoteApp/WriteArea'
import SaveNote from './NoteApp/SaveNote'
import "./NoteApp/NoteApp.css"

export default function App() {

  const [additem, setAddItem] = useState([]);
  console.log(additem)



  const addData = (Note) => {
    console.log("clicked")

    setAddItem((prevValue) => {
      console.warn(prevValue)

      return [...prevValue,Note]

    });
    console.log(Note)
  }

  const deleteData = (id) => {
    console.log("clicked",id);
    setAddItem((prev) =>
      prev.filter((currnt,indx) => {
       return  indx!== id;
      
      }) 
        
    );
    
  }

  return (
    <>
      <Navbar />
      <WriteArea passNote={addData} />
      <div className='position-div'>

        {additem.map((value, index) => {
          return <SaveNote
            id={index}
            title={value.title}
            content={value.content}
            key={index}
            removeNote={deleteData}
          />
        })}
      </div>
    </>
  )
}
