import React from 'react';
import QuestionEntry from './QuestionEntry.jsx'
const { useState, useEffect } = React;


// eslint-disable-next-line react/prop-types
const QuestionsAnswers = ({currentProduct, request}) => {
  const [search, setSearch] = useState('')
  const [qalist, setQAList] = useState([])


  if (currentProduct !== null && qalist.length === 0) {
    request(`/qa/questions/?product_id=40348`, 'GET', {}, (error, questions) => {
    if (!error) {
      console.log('PROD ID IS', questions)
      setQAList(questions.results);
    } else {
      console.error(error);
    }
    })
  }

  const handleSearchClick = () => {
    console.log('SEARCH IS ', search)
  }
  return (
    <div id='questions-answers'>
      Questions & Answers Component
      <div>
      <input type='text' value={search} placeholder='Find a Related Question' onChange={(e)=> {setSearch(e.target.value)}}/>
      <button onClick={handleSearchClick}>Search</button>
      </div>
      {qalist.map((question, key) => <QuestionEntry question={question} key={key}/>)}
    </div>
  );
};

export default QuestionsAnswers;