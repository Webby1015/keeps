import React from 'react';

const Listcontainer = (props) => {
    return (
        <div className='listitems'>
            {props.list.map((item)=>{
                return <span className='item' ><p>{item}</p><button className='delete'>✖</button> </span>
            })}
        </div>
    );
}

export default Listcontainer;
