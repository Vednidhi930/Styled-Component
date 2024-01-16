import React, { useState } from 'react'
import "./Todolist.css"
const Todolist = () => {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [list, setList] = useState([])

    const submithandler = (e) => {
        e.preventDefault();
        if(list.length===0 &&desc.length===0){
            alert("Write Something Here...");
        }else{
            setList([...list,{title,desc}])
            console.log(list)
        }
      
    
        setTitle("")
        setDesc('')
    }

    let data = <h4>No Data Available...</h4>

    const deletehandler=(i)=>{
      let copytask=[...list]
      copytask.splice(i,1);
      setList(copytask);
    }

    if(list.length>0){
        data=list.map((obj,index)=>{
            return <div className='render'>
                <h5>{obj.title}</h5>
                <h5>{obj.desc}</h5>
                <button className='delBtn' onClick={()=>{
                    deletehandler(index);
                }}>Delete</button>
            </div>
        })
    }
   
    return (
        <>
            <h1>MY TO DO LIST</h1>
            <br />
            <form onSubmit={submithandler}>
                <div className='form'>
                    <input type='text'
                        placeholder='Enter the title here'
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                    />

                    <input type='text'
                        placeholder='Enter the decription here'
                        value={desc}
                        onChange={(e) => {
                            setDesc(e.target.value)
                        }}
                    />
                    <button className='addBtn'  >Add Task</button>
                </div>
            </form>

            <div className='data'>
              <ul>
                <li>{data}</li>
              </ul>
            </div>

            <button className='allBtn' onClick={()=>{
                setList('');
            }}>Remove all task</button>
        </>
    )
}

export default Todolist
