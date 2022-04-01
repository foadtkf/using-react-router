import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Friend = () => {
    const [friends,setFriend]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])
    return (
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)'}}>
            {
               friends.map(friend=><Display key={friend.id} friend={friend}></Display>)
            }
        </div>
    );
};

export default Friend;