import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import News from './components/News/News';
import Reachart from './components/Reachart/Reachart';
import Areachart from './components/Areachart/Areachart';

function App() {
  const [title ,setTitle]=useState([])
  useEffect(() =>{
const url="http://newsapi.org/v2/everything?q=tesla&from=2021-02-06&sortBy=publishedAt&apiKey=0b3531bd72e246c993e90d6338dc5936"
axios(url)
.then(data =>setTitle(data.data.articles))
  },[])
  return (
    <div>
      <Areachart></Areachart>
      <Reachart></Reachart>
     <h3>Headline Length:{title.length}</h3>
     {
       title.map(article =><News article={article}></News>)
     }
    
    </div>
  );
}

export default App;
