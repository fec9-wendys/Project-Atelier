/* eslint-disable react/prop-types */
import React from 'react';
import AnswerEntry from './AnswerEntry.jsx'
const QuestionEntry = ({question}) => {
  const answers = []
  for(var id in question.answers) {
    answers.push(question.answers[id])
  }
  console.log(answers)

  return (
    <div>
      <h4>Q: {question.question_body}</h4>
     {answers.map((answer, key) => <AnswerEntry answer={answer} key={key}/> )}
    </div>
  )
}
export default QuestionEntry;