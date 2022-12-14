import React from 'react';
import ReactDom from 'react-dom';
const { useState } = React;
const QuestionModal = ({setQuestions, request, currentProduct, isqmodal, setIsQModal}) => {

  const [questioncomment, setQuestionComment] = useState('')
  const [questionname, setQuestionName] = useState('')
  const [questionemail, setQuestionEmail] = useState('')


  const handleCloseClick = () => {
    setIsQModal(!isqmodal)
  }
  const modal1Styles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000

  }
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
    zIndex: 1000
  }
  const helpSort = (a, b) => {
    return b.question_helpfulness - a.question_helpfulness
   }

  const handleSubmit = (e) => {
    e.preventDefault()
    request('/qa/questions', 'POST', {body: questioncomment, name: questionname, email: questionemail, product_id: currentProduct.id}, (error, response) => {
      if (error) {
        console.error(error);
      } else {
        request(`/qa/questions/?product_id=${currentProduct.id}`, 'GET', {}, (error, questions) => {
          if (!error) {
            console.log('NEW modal QUESTIONS ARE---> ', questions)
            setQuestions(questions.results.sort(helpSort));
            setIsQModal(!isqmodal)
          } else {
            console.error(error);
          }
          })
        console.log(response)
      }
    });
    console.log(questionemail, questioncomment, questionname, currentProduct.id)
  }
return ReactDom.createPortal(
  <>
  <div className="modaloverlay"/>
  <div className="modalwindow">
  <form onSubmit={handleSubmit}>
  <header>
    <h3> Ask Your Question </h3>
    <p> About the product here</p>
    </header>
  <label>Question:
    <input name="comment"
           type="text"
           placeholder="Product > anything else"
           autoComplete="on"
           value={questioncomment}
           maxLength='1000'
           onChange={(e)=>{setQuestionComment(e.target.value)}} required/>
  </label><br/>
  <label>Name:
    <input name="name"
           type="text"
           placeholder="Rick James"
           autoComplete="name"
           value={questionname}
           maxLength='60'
           onChange={(e)=>{setQuestionName(e.target.value)}} required/><br/>
    <small>For privacy reasons, do not use your full name or email address</small>
  </label><br/>
  <label>Email:
  <input name="email"
           type="text"
           placeholder="noobslayer420@yahoo.com"
           autoComplete="email"
           value={questionemail}
           maxLength='60'
           onChange={(e)=>{setQuestionEmail(e.target.value) }} required/><br/>
    <small>For authentication reasons, you will not be emailed</small>
  </label><br/>
  <input type='submit'/>
  </form>
    <button onClick={handleCloseClick}>Close Modal</button>
  </div>
  </>,
  document.getElementById('questionportal')
)
}

export default QuestionModal;