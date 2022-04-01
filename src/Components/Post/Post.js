import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const param=useParams()
    const [post,setPost]=useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${param.postid}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[param.postid])
    return (
        <div>
            <h1>Post: {post.id}</h1>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;