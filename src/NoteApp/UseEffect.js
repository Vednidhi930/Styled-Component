import React, { useEffect, useState } from 'react'

export default function UseEffect() {
  const[count,setCount]=useState(0)

  useEffect(()=>{
   document.title=`You Clicked Me ${count} Times`
  })
    
  return (
    <>
      <h1>Counter {count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Click</button>
    </>
  )
}
