import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friends = (props) => {
    const {name ,company,email,id}=props.user;
    const history =useHistory();
    const userStyle ={
        border:'1px solid gray',
        margin:'20px',
        padding:"20px",
        borderRadius:"5px",
        width:'300px'
    }
    const handClick =(friensId)=>{
     history.push(`/friend/${friensId}`)
    }
    return (
        <div style={userStyle}>
            <h2>Name:{name}</h2>
            <p>Email:{email}</p>
            <Link to ={`/friend/${id}`}>FriendsId: {id}</Link>
            <br></br>
            {/* <button onClick={()=>handClick(id)}>Follow me</button> */}

        </div>
    );
};

export default Friends;