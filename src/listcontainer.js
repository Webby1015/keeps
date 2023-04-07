import React from 'react';

const Listcontainer = (props) => {
    return (
        <div className='listitems'>
            {props.list.map((item)=>{
                return <span key={item.id} className='item' ><p>{item.taskname}</p><button className='delete'>✖</button> </span>
            })}
        </div>
    );
}

export default Listcontainer;
