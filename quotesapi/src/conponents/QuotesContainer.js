import React from 'react'
import "./QuotesContainer.css"
import Quote from './Quote'
const Quotes_container = () => {
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
    </div>
  </div>
  )
}

export default Quotes_container
