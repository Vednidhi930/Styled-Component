import React, { useState } from 'react'
import "./Accordion.css";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export default function MainAccordion({question,answer}) {
    const[show,setShow]=useState(false);

   const toggle=()=>{
      setShow(!show)
   }
  return (
    <>
       <div className='question-div'>
             <p onClick={toggle}>{show ?<RemoveCircleOutlineIcon/>:<ControlPointIcon/>}</p>
             <h4>{question}</h4>
       </div>

       {show && <h5>{answer}</h5>}
         
    </>
  )
}
