import React from 'react';
import QuestionEntry from './QuestionEntry.jsx'
import QuestionModal from './QuestionModal.jsx'
import AnswerModal from './AnswerModal.jsx'
import AnswerPhotoModal from './AnswerPhotoModal.jsx'
import styled from "styled-components";


const { useState, useEffect } = React;

const Title = styled.h2`
font-size: 30px;
text-align: center;

`;

const Container = styled.div`

display:flex;
justify-content: center;
align-items: center;

`;

const Search = styled.input`
text-align:left;
height: 40px;
width: 1400px;
font-size: 1.5vh;
 padding-left: 0.5vw;
 border-radius: 20px;

`;


// eslint-disable-next-line react/prop-types
const QuestionsAnswers = ({ isDarkMode, currentProduct, request}) => {
  //STATES
  const [search, setSearch] = useState('')
  const [questions, setQuestions] = useState([])
  const [shownQuestion, setShownQuestion] = useState([])
  const [moreButton , setMoreButton] = useState('More Answered Questions')
  const [searchButton, setSearchButton] = useState('Search')
  const [none, setNone] = useState(false)
  const [isqmodal, setIsQModal] = useState(false)
  const [isamodal, setIsAModal] = useState(false)
  const [isaphotomodal, setIsAPhotoModal] = useState(false)
  const [aphotomodalimg, setAPhotoModalImg] = useState(false)
  const [answermodalbody, setAnswerModalBody] = useState('')
  const [questionid, setQuestionId] = useState('')
  const [answers, setAnswers] = useState([])
  const [shownanswers, setShownAnswers] = useState(answers.slice(0,2))


  const styles = {
    position: 'relative',
    zIndex: 1
  }
  //INITIAL GET
  useEffect(() => {


    request(`/qa/questions/?product_id=${currentProduct.id}&count=30`, 'GET', {}, (error, questions) => {
        if (!error) {

          setQuestions(questions.results.sort(helpSort));
        } else {
          console.error(error);
        }
        })

  }, [currentProduct])
  // SETTING CORRECT AMT QUESTIONS TO RENDER
  useEffect(() => {
    if (questions.length > 1 && moreButton === 'More Answered Questions') {
      setShownQuestion(questions.slice(0,2))
      } else {
        setShownQuestion(questions.slice(0))
      }
  },[questions])
  // SORT HELPER
  const helpSort = (a, b) => {
    return b.question_helpfulness - a.question_helpfulness
   }
  // SEARCH FUNCTIONALITY
  const handleSearchClick = () => {
    console.log('SEARCH IS ', search)
    console.log('questions is ', questions)
    const temp = []
    if (search === '' && searchButton === 'Search') {
      setNone(true)
      setSearchButton('Back')
      console.log('clicked')
    } else {
    if (searchButton === 'Search') {
    for (var x = 0; x < questions.length; x++) {
      if(questions[x].question_body.toUpperCase().includes(search.toUpperCase()))
      temp.push(questions[x])
      setShownQuestion(temp)
      document.getElementById('morequestionsbtn').disabled = true
    }
    if(temp.length === 0) {
      setNone(true)
      console.log('NONE IS', none)
    }
    setSearchButton('Back')
    setSearch('')
  } else {
    document.getElementById('morequestionsbtn').disabled = false
    setNone(false)
    setShownQuestion(questions.slice(0,2))
    setSearchButton('Search')
    console.log('back click')

  }
}
}
  // MORE QUESTIONS BUTTON FUNCTIONALITY
  const handleMoreClick = () => {
    if(moreButton === 'Show Less Questions') {
      setShownQuestion(questions.slice(0,2))
      setMoreButton('More Answered Questions')
    } else {
    setShownQuestion(questions.slice(0))
    setMoreButton('Show Less Questions')
  }
  }
  // ADD QUESTION MODAL
  const handleAddQuestionClick = () => {
    setIsQModal(!isqmodal)
  }





  return (

    <div  style={styles} id='questions-answers'>
      <Title>Questions & Answers</Title>
      <Container>
     <div className='qacontainer'>


        <div className='qasearchbar'>
      <Search type='text' value={search} placeholder='Find a Related Question' onChange={(e)=> {setSearch(e.target.value)}}/>
      <img src="https://i.ibb.co/MhfN01W/searchbar-icon.webp" alt = 'magnifying glass icon' className="qasearchimg" ></img>
      <button className="btn" id="qasearchbutton" onClick={handleSearchClick}>{searchButton}</button>
      </div>

      <div id="addquestioncontainer">
      <button className="addquestionbtn" onClick={handleAddQuestionClick} >ADD A QUESTION</button>
      </div>

      <div>{isamodal && <AnswerModal  setQuestions={setQuestions} questionid={questionid} answermodalbody={answermodalbody} request={request}  currentProduct={currentProduct} isamodal={isamodal} setIsAModal={setIsAModal}/>}
      </div>

      <div>{!none && shownQuestion.map((question, key) =>
      <QuestionEntry isDarkMode={isDarkMode} setAPhotoModalImg={setAPhotoModalImg} setIsAPhotoModal={setIsAPhotoModal} setQuestionId={setQuestionId}  shownQuestion={shownQuestion} setAnswerModalBody={setAnswerModalBody} isamodal={isamodal} setIsAModal={setIsAModal} currentProduct={currentProduct} questions={questions} setQuestions={setQuestions} helpSort={helpSort} request={request} question={question} key={key}/>)}
      </div>

      <div>

        <div>{none && <h3>NO MATCHING RESULTS</h3>}</div>
        {isqmodal && <QuestionModal setQuestions={setQuestions} request={request} currentProduct={currentProduct} isqmodal={isqmodal} setIsQModal={setIsQModal}/>}
        {isaphotomodal && <AnswerPhotoModal aphotomodalimg={aphotomodalimg} setIsAPhotoModal={setIsAPhotoModal}/>}

        <div id="qabottombuttons">
        <button  id='morequestionsbtn' onClick={handleMoreClick}>{moreButton}</button>
        </div>

      </div>

      </div>
      </Container>
    </div>


  );
};

export default QuestionsAnswers;