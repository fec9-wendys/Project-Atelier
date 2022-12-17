import React from 'react'
import Photos from './Photos.jsx'
const { useState } = React;
const AnswerEntry = ({ setAPhotoModalImg, setIsAPhotoModal, answer, request, question, setAnswers}) => {

  const [answeronce, setAnswerOnce] = useState({helpful: null, reported: null})
  const [ansreportedtext, setAnsReportedText] = useState('Report')

  if(answer.date !== undefined){
  const adate = new Date(answer.date.slice(0,10)).toString()
  var date2 = adate.slice(0,10)
  } else {
    date2 = ''
  }

  const handleUpVote = () => {
    console.log('ANSWER ID IS' , answer.answer_id)
    if(answeronce.helpful === null) {
    request(`/qa/answers/${answer.answer_id}/helpful`, 'PUT', {}, (error, response) => {
      if (!error) {
        setAnswerOnce({helpful: true, reported: null})
        request(`/qa/questions/${question.question_id}/answers?count=30`, 'GET', {}, (error, results) => {
          if (!error) {
            console.log('ANSWERS ARE --->', results.results.sort(helpSort))
            console.log('QUESTION ID IS' ,question.question_id)
            setAnswers(results.results.sort(helpSort));
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
  const handleReport = () => {
    console.log('clicked')
    if(answeronce.reported === null) {
      request(`/qa/answers/${answer.answer_id}/report`, 'PUT', {}, (error, response) => {
        if (!error) {
          setAnswerOnce({helpful: answeronce.helpful, reported: true})
          setAnsReportedText('Reported')
        } else {
          console.error(error);
        }
        })
      }
  }
  const helpSort = (a, b) => {
    return b.helpfulness - a.helpfulness
   }

  return (
    <div className="answer-section">
      <div className="answer-title"><h4> A: {answer.body}</h4></div>
      <span>
      {answer.photos.length > 0 &&
      answer.photos.map((photo, key)=>
       <Photos setAPhotoModalImg={setAPhotoModalImg} setIsAPhotoModal={setIsAPhotoModal} key={key} photo={photo}/>)}
      <p className="helpful" >by {answer.answerer_name}, {date2} | Helpful? <u  onClick={handleUpVote}>Yes</u> ({answer.helpfulness}) | <u onClick={handleReport}>{ansreportedtext}</u> </p>
      </span>
    </div>
  )
}

export default AnswerEntry;