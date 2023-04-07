import React, { useState } from 'react';
import Todolist from './todolist';
const Makelist = () => {

    const [newtitle,setnewtitle]  = useState("")
    const [newtitlelist,setnewtitlelist] = useState("")

    const listtitle = (event)=> {

        setnewtitle(event.target.value)
        // console.log(newtitle)

    }

    const addtolist = ()=> {
        const title = {
            id : newtitlelist.length+1,
            taskname: newtitle
        }

        setnewtitlelist([...newtitlelist,title])
    }
     
    // console.log(newtitlelist)
     
    return (
        <div>
        <div className="titlecontainer">
        <div className='makelist'>
            <input type="text" onChange={listtitle} placeholder='Take a note...' />
            <button onClick={addtolist}><b> ✓ </b></button>
        </div>
        
        </div>
        <div className="topics">
        <Todolist />
        </div>
        </div>
    );
}

export default Makelist;
