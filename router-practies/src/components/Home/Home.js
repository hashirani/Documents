import React from 'react';
import { useEffect, useState } from 'react';
import Friends from '../Friends/Friends';



const Home = () => {
      const [users ,setUsers] = useState([])
      useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res =>res.json())
      .then(data =>setUsers(data))
       },[])
    return (
        <div>
           <h2>Total users : {users.length}</h2>
           {
             users.map(user =><Friends user={user}></Friends>)
           } 
        </div>
    );
};

export default Home;