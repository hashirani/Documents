import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Headline = () => {
    const [title,setTitle] =useState([]);
  useEffect(()=>{
const url="http://newsapi.org/v2/everything?q=tesla&from=2021-02-05&sortBy=publishedAt&apiKey=0b3531bd72e246c993e90d6338dc5936"
fetch(url)
.then(res =>res.json())
.then(data =>setTitle(data.articles))
  },[])
     return (
        <div>
           <h2>Top Headline:{title.length}</h2> 
           {
               title.map( article =><News article={article}></News>)
           }
        </div>
    );
};

export default Headline;