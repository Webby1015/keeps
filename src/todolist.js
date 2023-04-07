import React from 'react';
import Listcontainer from './listcontainer';

const Todolist = (props) => {
    const todolist = ["get groceries", "Buy pens" , "mangoesssssssssssssssssssssssssssss","get groceries", "Buy pens" , "mangoesssssssssssssssssssssssssssss","get groceries", "Buy pens" , "mangoesssssssssssssssssssssssssssss"]
    return (
        <div className='todolist'>
            <div className="title">
            <h3  >{props.title}</h3>
            </div>
            <Listcontainer list = {todolist}/>
            <input type="text" />
            
            <button>✚</button>
            <button>✔</button>
            
        </div>
    );
}

export default Todolist;
