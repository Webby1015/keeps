import React from 'react';
import Listcontainer from './listcontainer';

const Todolist = (props) => {
    const todolist = [
    {id:1,
    list:"buy apples"},
    {id:2,
    list:"buy apples"},
    {id:3,
    list:"buy apples"},
    {id:4,
    list:"buy apples"},
    {id:5,
    list:"buy apples"}]
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
