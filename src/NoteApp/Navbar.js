import React from 'react'
import './NoteApp.css'
import logo from "./logo.jpg";

export default function Navbar() {
  return (
    <>
     <div className='navbar-div'>
         <img alt='logo' src={logo} className='logo' /> 
         <h4>Clone <span>Keep</span></h4> 
     </div>
    </>
  )
}
