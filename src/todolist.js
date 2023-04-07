import React, { useState } from 'react';
// import Listcontainer from './listcontainer';

const Todolist = (props) => {
    const [todolist,settodolist] = useState([])
    const [todo,settodo] = useState("")

    const listitem = (event)=> {
        settodo(event.target.value)
        console.log(todo)
    }

    const addtolist = ()=> {
        
        const task = {
            id : todolist.length===0?1: todolist[todolist.length-1].id+1,
            taskname: todo
        }
        settodolist([...todolist,task])
        // console.log(todolist.length)
        // console.log(todolist)
    }

    const deletetask = (id)=> {
        settodolist( todolist.filter((item)=> item.id!==id))
    }

    return (
        <div className='todolist'>
            <div className="title">
            <h3  >{props.title}</h3>
            </div>
            
            <div className='listitems'>
            {todolist.map((item)=>{
                return <span key={item.id} className='item' ><p>{item.taskname}</p><button className='delete' onClick={()=>deletetask(item.id)} >✖</button> </span>
            })}
            </div>
            <input onChange={listitem} type="text" />
            
            <button onClick={addtolist}>✚</button>
            
            
        </div>
    );
}

export default Todolist;
