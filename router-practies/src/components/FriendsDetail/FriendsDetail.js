import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendsDetail = () => {
    const {friendId} = useParams();
    const [friend,setFriend] =useState({})
  
    useEffect(() =>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch (url)
        .then(res =>res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <p>This is Friends Detail Components : {friendId}</p>
            <h2>{friend.name}</h2>
            <h5>{friend.username}</h5>
            <p>{friend.email}</p>
            <p>{friend.website}</p>
            <p>{friend.phone}</p>
        </div>
    );
};

export default FriendsDetail;