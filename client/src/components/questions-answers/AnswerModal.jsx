import React from 'react';
import ReactDom from 'react-dom';
import UploadPhoto from './UploadPhoto.jsx'
const {useState} = React;

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
  const modalStyles = {
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
  <>
  <div style={overlayStyle}/>
  <div style={modalStyles}>
  <form onSubmit={handleSubmit}>
  <header>
    <h3> Submit Your Answer </h3>
    <p> {currentProduct.name} : {answermodalbody}</p>
    </header>
  <label>Your answer:<br/>
    <input name="comment"
           type="text"
           placeholder="my answer is so good"
           autoComplete="on"
           value={answerbody}
           maxLength='1000'
           onChange={(e)=>{setAnswerBody(e.target.value)}} required/>
  </label><br/>
  <label>What is your nickname:<br/>
    <input name="name"
           type="text"
           placeholder="Example: jack543!"
           autoComplete="name"
           value={answername}
           maxLength='60'
           onChange={(e)=>{setAnswerName(e.target.value)}} required/><br/>
    <small>For privacy reasons, do not use your full name or email address</small>
  </label><br/>
  <label>Your email:<br/>
  <input name="email"
           type="text"
           placeholder="Example: jack@email.com"
           autoComplete="email"
           value={answeremail}
           maxLength='60'
           onChange={(e)=>{setAnswerEmail(e.target.value) }} required/><br/>
    <small>For authentication reasons, you will not be emailed</small>
  </label><br/>
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
  <input type='submit'/>
  </form>
    <button onClick={handleCloseClick}>Close Modal</button>
  </div>
  </>,
  document.getElementById('answerportal')
)
}

export default AnswerModal;