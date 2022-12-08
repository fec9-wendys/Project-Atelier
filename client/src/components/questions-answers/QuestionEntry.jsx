/* eslint-disable react/prop-types */
import React from 'react';
import AnswerEntry from './AnswerEntry.jsx'

const { useState, useEffect } = React;

const QuestionEntry = ({  setQuestionId, shownQuestion, setAnswerModalBody, isamodal, setIsAModal, currentProduct, question, request, setQuestions, questions}) => {

  const [answers, setAnswers] = useState([])
  const [shownanswers, setShownAnswers] = useState(answers.slice(0,2))
  const [loadbutton, setLoadButton] = useState('Load More')
  const [questiononce, setQuestionOnce] = useState({helpful: null})
  const [reportedtext, setReported] = useState('Report')


  useEffect(() => {
    request(`/qa/questions/${question.question_id}/answers/?count=30`, 'GET', {}, (error, answers) => {
      if (!error) {
        console.log('ANSWERS ARE --->', answers)
        setAnswers(answers.results.sort(helpSort));
      } else {
        console.error(error);
      }
      })
  },[shownQuestion])


  const helpSort = (a, b) => {
   return b.helpfulness - a.helpfulness
  }


  const handleLoadClick = () =>{
    console.log(answers.length)
    if (loadbutton === 'Load More'){
      console.log('MORE BUTTON CLICK')
      console.log('UPDATED ANSWERS ARE', answers)

      setLoadButton('Show Less')
      setShownAnswers(answers)
    } else {
      console.log('LOAD LESS BUTTON CLICK')
      setShownAnswers(answers.slice(0,2))
      setLoadButton('Load More')
    }
  }

  const handleUpVote = () => {
    console.log('QUESTION ID IS ' , question.question_id)
    if(questiononce.helpful === null) {
    request(`/qa/questions/${question.question_id}/helpful`, 'PUT', {}, (error, response) => {
      if (!error) {
        setQuestionOnce({helpful: true})
        request(`/qa/questions/?product_id=${currentProduct.id}&count=30`, 'GET', {}, (error, questions) => {
          if (!error) {
            console.log('NEW QUESTIONS ARE --->', questions)
            setQuestions(questions.results.sort(helpSort));
          } else {
            console.error(error);
          }
          })
      } else {
        console.error(error);
      }
      })
    }
  }
  useEffect(()=> {
    console.log('I RAN', shownanswers)
    if(shownanswers.length>2) {
      setShownAnswers(answers.slice(0, shownanswers.length))
    } else{
    if (answers.length > 1) {
    setShownAnswers(answers.slice(0,2))
    } else {
      setShownAnswers(answers.slice(0))
    }
  }
  }, [answers])

  const handleAddAnswer = () => {
    setIsAModal(!isamodal)
    setAnswerModalBody(question.question_body)
    setQuestionId(question.question_id)
  }

  return (
    <div>
      <span>
      <h4>Q: {question.question_body}</h4>
      <p>Helpful? <u onClick={handleUpVote}>Yes</u> ({question.question_helpfulness}) | <u onClick={handleAddAnswer}
        >Add Answer</u> </p>
      </span>
     {shownanswers.map((answer, key) => <AnswerEntry  setAnswers={setAnswers} question={question} request={request} answer={answer} key={key}/> )}
    {answers.length > 2 && <button onClick={handleLoadClick} id="loadmoreanswersbutton">{loadbutton}</button>}
    </div>
  )
}
export default QuestionEntry;