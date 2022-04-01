import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendID}=useParams()
    const [friend,setFriend]=useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendID}`)
    .then(res=>res.json())
    .then(data=>setFriend(data))
    },[friendID])
    return (
        <div>
            <h1>Name :{friend.name}</h1>
            <h4>Lives in: {friend.address?.city}</h4>
            <p>Phone: {friend.phone}</p>
            <p>Email: {friend.email}</p>
            <p><small>Website: {friend.website}</small></p>
        </div>
    );
};

export default FriendDetail;