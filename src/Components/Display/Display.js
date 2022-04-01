import React from 'react';
import {useNavigate } from 'react-router-dom';

const Display = (props) => {
    const {name,username,id}=props.friend
    let navigate=useNavigate()
    const selectedFriend=()=>{
        const path=`/friends/${id}`
        navigate(path)
    }
    return (
        <div style={{border:'1px solid black',padding:'2px',margin:'2%'}}>
            <h4>Name: {name}</h4>
            <p>Username: {username}</p>
            <button onClick={selectedFriend}>{id}.{name}</button>
        </div>
    );
};

export default Display;