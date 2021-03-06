import logo from './logo.svg';
import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase';
import { useState } from 'react';
//import { firebaseConfig } from "./const"

firebase.initializeApp(firebaseConfig)



function App() {
const [newUser , setNewUser] = useState(false)
  const [user , setUser] = useState({
   isSignedIn:false,
   name:"",
   email:"",
   photo:"" 
  })
  const provider = new firebase.auth.GoogleAuthProvider();
  const handelSignIn =() =>{
   firebase.auth().signInWithPopup(provider).then(res =>{
     const {displayName , photoURL, email} = res.user;
     const singInUser ={
       isSignedIn:true,
       name:displayName,
       email:email,
       photo:photoURL
     }
     setUser(singInUser);
     console.log(displayName ,photoURL,email)
   }) 
   .catch(err =>{
     console.log(err);
     console.log(err.massage);
   })
  }
  const handelSignOut =()=>{
    
    firebase.auth().signOut()
    .then(res =>{
      const signedOutUser ={
        isSignedIn:false,
        newUser:false,
        name:"",
        email:"",
        password:"",
        photo:"",
        error:"",
        success: false
      }
      setUser(signedOutUser)
      console.log(res)
    })
    .catch(err =>{
      // console.log(err);
      // console.log(err.massage);
    })
  }
  const handelBulr =(e) =>{
    let isFormValid = true;
    if(e.target.name === 'email'){
       isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
     
    }
    
    if(e.target.name === 'password'){
       const isPasswordValid = e.target.value.length>6;
       const passwordHasNumber = /\d{1}/.test(e.target.value);
       isFormValid =  isPasswordValid && passwordHasNumber
    }
    if(isFormValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }

  }
  const handelSubmit =(e) =>{
    //console.log(user.email , user.password)
    if( newUser && user.email && user.password){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      // .then((userCredential) => {
      //   // Signed in 
      //   var user = userCredential.user;
      //   // ...
      // })
      .then(res =>{
        const newUserInfo = {...user}
        newUserInfo.error= "";
        newUserInfo.success = true;
        setUser(newUserInfo);
        updateUserName(user.name)
        console.log(res)
      })
      .catch((error) => {
     const newUserInfo = {...user};
     newUserInfo.error = error.message;
     newUserInfo.success = false;
     setUser(newUserInfo);
      });
    }
    if( newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email,user.password)
     .then((res) =>  { 
     const newUserInfo = {...user}
     newUserInfo.error= "";
     newUserInfo.success = true;
     setUser(newUserInfo);
     console.log('login' ,res.user)
   
  })
  .catch((error) => {
    const newUserInfo = {...user};
    newUserInfo.error = error.message;
    newUserInfo.success = false;
    setUser(newUserInfo);
  });
    }
    e.preventDefault()
  }
  const updateUserName = name =>{
    const user = firebase.auth().currentUser;

        user.updateProfile({
          displayName: name,
         
          
        }).then(function() {
          console.log(' Update successful.')
        }).catch(function(error) {
          console.log(error)
        });

  }
  return (
    <div className="App">
  {
    user.isSignedIn ?<button onClick={handelSignOut}>Sign Out</button> :
    <button onClick={handelSignIn}>Sign In</button>
  }
    {
     user.isSignedIn &&   <div>
     <p>Name : {user.name}</p>
     <p>Email : {user.email}</p>
     <img src={user.photo} alt=""/>
     </div>
    }
    <h1>Our Own Authentication</h1>
    {/* <p>Name : {user.name}</p>
    <p>Email : {user.email}</p>
    <p>Password : {user.password}</p> */}
    <form onSubmit={handelSubmit}>
      <input type="checkbox"  onChange={()=>setNewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser">New User Sign up</label>
      <br/>
    {newUser && <input type="text" name="name" onBlur={handelBulr} placeholder="Your name" />}
      <br/>
      <input type="text" name="email" onBlur={handelBulr} placeholder="Your email" required/>
      <br/>
      <input type="password" name="password" onBlur={handelBulr} placeholder="Your password" required/>
      <br/>
      <input type="submit" value={newUser ? "Sign up" :"Sign in"}/>
    </form>
    <p style ={{color:'red'}}>{user.error}</p>
    {
      user.success && <p style ={{color:"green"}}>User {newUser ? "created" :'Logged In'} successfuly</p>
    }

  </div>
  );
}

export default App;
