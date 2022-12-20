import React, { useState,useEffect } from 'react'
import "./QuotesContainer.css"
import Quote from './Quote'
const Quotes_container = () => {

  const [Quotes,setQuotes]=useState([]);

  const getTenRandomQuotes=(Quotes)=>{
    const randomQuotes=[];
    for(let i=0;i<10;i++){
      const randomIndex=Math.floor(Math.random()*Quotes.length);
      randomQuotes.push(Quotes[randomIndex]);
    }
    return randomQuotes;
  }

  useEffect(() => {
    const fetchQuotes=async()=>{
      const response=await fetch("http://type.fit/api/quotes");
   const data=await response.json();
   const randomQuotes=getTenRandomQuotes(data);
   console.log(data);
   setQuotes(randomQuotes);
      
    }
  
    fetchQuotes();
  }, [])
  

  return (
    <div className="main-container">
    <h1>Best inspirational Quotes</h1>
    <p>
      int he name of allah he is one of th e createer a initionat and
      desiginer
    </p>
    <p>They all are famous peple</p>

    <div className="quotes-container">
     <Quote/>
     <Quote/>
    </div>
  </div>
  )
}

export default Quotes_container
