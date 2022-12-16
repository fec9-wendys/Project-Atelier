import React from 'react';
import ReactDom from 'react-dom';
import styled from "styled-components";
const AModalTitle = styled.h2`

display:flex;
justify-content: center;
align-items: center;

`;
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
  <div className="modal">
  <div className="modaloverlay"/>
  <div className="modalwindow" id="questionmodalwindow">

  <form onSubmit={handleSubmit}>
  <AModalTitle>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="gooey">

                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
            </filter>
        </defs>
    </svg>

    <button className="gooey-button"  id="answermodalbutton">Ask Your Question
        <span className="bubbles">
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
        </span>
    </button>
    </AModalTitle>

    <div className="qamodalbody">
    <header>
    <h3> About the product here</h3>
    </header>
    <br/>

  <label>Name:<br></br>
    <input className="modalinput1" name="name"
           type="text"
           placeholder="Rick James"
           autoComplete="name"
           value={questionname}
           maxLength='60'
           onChange={(e)=>{setQuestionName(e.target.value)}} required/><br/>
    <small>For privacy reasons, do not use your full name or email address</small>
  </label><br/>
  <label>Email:<br/>
  <input  className="modalinput1" name="email"
           type="text"
           placeholder="noobslayer420@yahoo.com"
           autoComplete="email"
           value={questionemail}
           maxLength='60'
           onChange={(e)=>{setQuestionEmail(e.target.value) }} required/><br/>
    <small>For authentication reasons, you will not be emailed</small>
  </label><br/>
  <label>Question:<br/>

  <textarea cols="40" rows="5" className="modalinput2" name="comment"
           type="text"
           placeholder="Product > anything else"
           autoComplete="on"
           value={questioncomment}
           maxLength='1000'
           onChange={(e)=>{setQuestionComment(e.target.value)}} required></textarea>
  </label><br/>
  <div className="qamodalsubmitbtncontainer">
  <input className="qamodalsubmitbtn" type='submit' value="Post"/>
  </div>
  </div>
  </form>
    <button className="qamodalclose" onClick={handleCloseClick}>X</button>
  </div>
  </div>,
  document.getElementById('questionportal')
)
}

export default QuestionModal;