import React, { useState } from 'react';
import Todolist from './todolist';
const Makelist = () => {

    const [title,settitle]  = useState("")
    const [titlelist,settitlelist] = useState([])

    const writetitle = (event)=> {

        settitle(event.target.value)
        // console.log(newtitle)

    }

    const addtolist = ()=> {
        const tasktitle = {
            id : titlelist.length===0?1: titlelist[titlelist.length-1].id+1 ,
            taskname: title
        }

        settitlelist([...titlelist,tasktitle])
        // titlelist.map((item)=>{
        //     console.log(item)
        // })
    }

    const deletetitle = (id) => {
        settitlelist(titlelist.filter((task)=> task.id!==id))
    }
     
    
     
    return (
        <div>
        <div className="titlecontainer">
        <div className='makelist'>
            <input type="text" onChange={writetitle} placeholder='Take a note...' />
            <button onClick={addtolist}><b> ✓ </b></button>
        </div>
        
        </div>
        <div className="topics">
        {titlelist.map((tasks)=>{

            return <div key={tasks.id} className='titlecontainer1'><button className='titledelete' onClick={()=>deletetitle(tasks.id)}>✖</button><Todolist title={tasks.taskname} id={tasks.id} /></div>
        })}
        </div>
        
        </div>
    );
}

export default Makelist;
