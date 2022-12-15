import React from 'react';
import ReactDom from 'react-dom';
import UploadPhoto from './UploadPhoto.jsx'
import styled from "styled-components";
const {useState} = React;

const AModalTitle = styled.h1`

display:flex;
justify-content: center;
align-items: center;


`;

const AnswerModal = ({ setQuestions, questionid, answermodalbody, request, currentProduct, isamodal, setIsAModal}) => {
  const [answerbody, setAnswerBody] = useState('')
  const [answername, setAnswerName] = useState('')
  const [answeremail, setAnswerEmail] = useState('')
  const [answerphotos, setAnswerPhotos] = useState([])

  const handleCloseClick = () => {
    setIsAModal(!isamodal)
  }
  const helpSort = (a, b) => {
    return b.question_helpfulness - a.question_helpfulness
   }
  const handleSubmit = (e) => {
    e.preventDefault()
    request(`/qa/questions/${questionid}/answers`, 'POST', {body: answerbody, name: answername, email: answeremail, photos: answerphotos}, (err, response) => {
      if(err) {
        console.log(err)
      } else {
        console.log('GOOD', response)
         request(`/qa/questions/?product_id=${currentProduct.id}`, 'GET', {}, (error, questions) => {
          if(err) {
            console.log(err)
          } else {
            setQuestions(questions.results.sort(helpSort));
          }
        })
      }
    })
    setIsAModal(!isamodal)
  }


  const handleImageUpload = (e) => {
    if(answerphotos.length > 3) {
      document.getElementById('imageuploadbutton').disabled = true
    }
    const temp = [...answerphotos]
    temp.push(URL.createObjectURL(e.target.files[0]))
    setAnswerPhotos(temp)
    console.log(answerphotos)
  }

return ReactDom.createPortal(
  <div className="modal">
  <div className="modaloverlay"/>
  <div className="modalwindow">
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

    <button className="gooey-button"  id="answermodalbutton">Submit Your Answer

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
    <b><p> {currentProduct.name} : {answermodalbody}</p></b>
    </header>

  <label>What is your nickname:<br/>
    <input className="modalinput1" name="name"
           type="text"
           placeholder="Example: jack543!"
           autoComplete="name"
           value={answername}
           maxLength='60'
           onChange={(e)=>{setAnswerName(e.target.value)}} required/><br/>
    <small><i>For privacy reasons, do not use your full name or email address</i></small>
  </label><br/>
  <br/>
  <label>Your email:<br/>
  <input className="modalinput1" name="email"
           type="text"
           placeholder="Example: jack@email.com"
           autoComplete="email"
           value={answeremail}
           maxLength='60'
           onChange={(e)=>{setAnswerEmail(e.target.value) }} required/><br/>
    <small><i>For authentication reasons, you will not be emailed</i></small>
  </label><br/>
  <br/>
  <label>Your answer:<br/>
    <textarea cols="40" rows="5" className="modalinput2" name="comment"
           type="text"
           placeholder="my answer is so good"
           autoComplete="on"
           value={answerbody}
           maxLength='1000'
           onChange={(e)=>{setAnswerBody(e.target.value)}} required></textarea>
  </label>
  {/* <br/> */}
  {/* <br/> */}
  <div className="qamodalimages">
  <label>Upload Photos *max 5<br/>
    <input id="imageuploadbutton"
           type="file"
           name="file"
           onChange={handleImageUpload}
           />
  </label><br/>

  {answerphotos.map((photo, key) =>
      <UploadPhoto photo={photo} key={key}/>)}
    <br/>
    </div>
    <div className="qamodalsubmitbtncontainer">
  <input className="qamodalsubmitbtn" type='submit' value='Post'/>
  </div>
  </div>
  </form>
    <button className="qamodalclose" onClick={handleCloseClick}>X</button>
  </div>
  </div>,
  document.getElementById('answerportal')
)
}

export default AnswerModal;