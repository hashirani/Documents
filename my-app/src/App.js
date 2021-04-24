import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const homes =['Bellal','Shohel','Murad','Rasel'];
  const persons =[    
    {name:'Susana',job:'Developer'},
    {name:'Suboj',job:'Font-end'},
    {name:'Mithila',job:'Web-developer'},
    {name:'Halim',job:'Code-developer'},
    {name:'Sanu',job:'Developer'}  
]
const [nayoks,setNayoks]=useState([]);
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data=>setNayoks(data)) 
},[])
  return (
    <div className="App">
      <Movecount></Movecount> 
  
     {
       nayoks.map(nayok=><Nayok name={nayok.name} email={nayok.email}></Nayok>)
     }

     {
       persons.map(nm =><Preson data={nm} ></Preson>)
     }
      <Home name={homes[2]} city="Bangladesh"></Home>
      <Home name="Saket" city="Nederland"></Home>
      <Home name="Sumi" city="Bangladesh"></Home>
      <Home name={homes[3]} city="Canada"></Home>
      <Home name="Hemel" city="Bangladesh"></Home>     
    
      <header className="App-header">    
        <img src={logo} className="App-logo" alt="logo" />       
      </header>
    </div>
  );
}

function Home(props) {
  const homeStyle={
    border:'3px solid red',
    margin:'20px'
  }

  return(
    <div style={homeStyle}>
      <h1>{props.name}</h1>
      <h4>Cuntry:{props.city}</h4>
    </div>
  );
}

 function Preson(props) {
  const personStyle={
    border:'3px solid blue',
    margin:'20px',
    width:'250px',
    height:'250px'
  }
  const {name,job} = props.data;
   //console.log(props)
   return(
     <div style={personStyle}>
       <h1>{name}</h1>
       <h5>{job}</h5>
     </div>
   );   
 }

 function Movecount() {
   const [count ,setCount] = useState(0)
   const handleClick = ()=>setCount(count+1)
   const handledlick = ()=>setCount(count-1)

   return(
     <div>
       <h1>Move:{count}</h1>
       <button onClick={handleClick}>Click me</button>
       <button onClick={handledlick}>Click me</button>
      <Movesdisplay moves={count}></Movesdisplay>
      <Movesdisplay moves={count+4}></Movesdisplay>
      <Movesdisplay moves={count}></Movesdisplay>     
     </div>
   );
 }

 function Movesdisplay(props) {
   return(
     <div>
       <h2>I have twee moves:{props.moves}</h2>
     </div>
   )
 }

 function Nayok(props) {
  const nayokStyle={
   border:'1px solid gray',
   backgroundColor:'lightblue',
   borderRadius:'5px',
   margin:'20px'
  }
   return(
     <div style={nayokStyle}>
       <h1>{props.name}</h1>
       <h4>{props.email}</h4>     
     </div>
   )
   
 }

export default App;
