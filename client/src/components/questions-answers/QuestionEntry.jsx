/* eslint-disable react/prop-types */
import React from 'react';
import AnswerEntry from './AnswerEntry.jsx'
const { useState } = React;

const QuestionEntry = ({question}) => {

  const [answers, setAnswers] = useState([])
  const [shownanswers, setShownAnswers] = useState([])
  const [loadbutton, setLoadButton] = useState('Load More')
  const set = () => {
  const prev = []
  for(var id in question.answers) {
      prev.push(question.answers[id])
  }
  setAnswers(prev)
  const [a, b] = prev
  setShownAnswers([a, b])
  }
  if(answers.length === 0) {
    set()
  }

  console.log('ANSWERS ARE ', answers)
  console.log('SHOWN ANSWERS', shownanswers)

  const date = new Date(question.question_date.substring(0,10)).toString()
  const date1 = date.slice(0,10)
  console.log('question date', date1)

  const handleLoadClick = () =>{
    if (loadbutton === 'Load More'){
      setShownAnswers(answers)
      setLoadButton('Show Less')
    } else {
      setShownAnswers([answers[0], answers[1]])
      setLoadButton('Load More')
    }
  }

  return (
    <div>
      <h4>Q: {question.question_body}</h4>
      <span>
      <p>Helpful? <u>Yes</u> ({question.question_helpfulness}) | <u>Report</u> </p>
      </span>
     {shownanswers.map((answer, key) => <AnswerEntry  answer={answer} key={key}/> )}
     <button onClick={handleLoadClick}>{loadbutton}</button>
    </div>
  )
}
export default QuestionEntry;