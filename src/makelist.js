import React, { useState } from 'react';
import Todolist from './todolist';
const Makelist = () => {

    const [title,settitle]  = useState("")
    const [titlelist,settitlelist] = useState("")

    const writetitle = (event)=> {

        settitle(event.target.value)
        // console.log(newtitle)

    }

    const addtolist = ()=> {
        // const tasktitle = {
        //     id : titlelist.length+1,
        //     taskname: title
        // }

        settitlelist([...titlelist,title])
        // titlelist.map((item)=>{
        //     console.log(item)
        // })
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
        <Todolist title={"hello"}/>
        <Todolist title={"hello"}/>
        <Todolist title={"hello"}/>
        </div>
        
        </div>
    );
}

export default Makelist;
