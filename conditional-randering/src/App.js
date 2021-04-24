import logo from './logo.svg';
import './App.css';
import Users from './components/Users/Users';
import { useState } from 'react';

function App() {
  const [user ,setUser] = useState(false)
  return (
    <div className="App">
      <h2>Is User:{user.toString()}</h2>
      <button onClick={()=>setUser(!user)}>Toggle</button>
      <Users user={user}></Users>
    </div>
  );
}

export default App;
