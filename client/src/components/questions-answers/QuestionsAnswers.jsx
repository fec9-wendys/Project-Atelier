import React from 'react';
import QuestionEntry from './QuestionEntry.jsx'
import QuestionModal from './QuestionModal.jsx'
import AnswerModal from './AnswerModal.jsx'
import styled from "styled-components";

const { useState, useEffect } = React;

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;
const Button = styled.button`
border: 4px solid #e8ecf2;
  color: #73787d;
  background-color: #e8ecf2;
  width: 80px;
  height: 40px;
  border-radius: 9999px;
  box-shadow:  -5px -5px 10px rgba(255,255,255,0.8),
                5px 5px 10px rgba(0,0,0,0.25);
   &:hover {
    color: #46719b;
    box-shadow:  -1px -1px 5px rgba(255,255,255,0.6),
     1px 1px 5px rgba(0,0,0,0.3),
     inset -2px -2px 5px rgba(255,255,255,0.6),
     inset 2px 2px 4px rgba(0,0,0,0.3);
   }

`;



// eslint-disable-next-line react/prop-types
const QuestionsAnswers = ({currentProduct, request}) => {
  //STATES
  const [search, setSearch] = useState('')
  const [questions, setQuestions] = useState([])
  const [shownQuestion, setShownQuestion] = useState([])
  const [moreButton , setMoreButton] = useState('More Answered Questions')
  const [searchButton, setSearchButton] = useState('Search')
  const [none, setNone] = useState(false)
  const [isqmodal, setIsQModal] = useState(false)
  const [isamodal, setIsAModal] = useState(false)
  const [answermodalbody, setAnswerModalBody] = useState('')
  const [questionid, setQuestionId] = useState('')
  const [answers, setAnswers] = useState([])
  const [shownanswers, setShownAnswers] = useState(answers.slice(0,2))


  const styles ={
    position: 'relative',
    zIndex: 1
  }
  //INITIAL GET
  useEffect(() => {
    if (currentProduct !== null && questions.length === 0) {
    request(`/qa/questions/?product_id=${currentProduct.id}&count=30`, 'GET', {}, (error, questions) => {
        if (!error) {
          console.log('QUESTIONS ARE---> ', questions)
          setQuestions(questions.results.sort(helpSort));
        } else {
          console.error(error);
        }
        })
      }
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
      <Title>Questions & Answers Component</Title>
      <div>
      <input type='text' value={search} placeholder='Find a Related Question' onChange={(e)=> {setSearch(e.target.value)}}/>
      <Button onClick={handleSearchClick}>{searchButton}</Button>
      </div>
      <div>{isamodal && <AnswerModal  setQuestions={setQuestions} questionid={questionid} answermodalbody={answermodalbody} request={request}  currentProduct={currentProduct} isamodal={isamodal} setIsAModal={setIsAModal}/>}</div>
      <div>{!none && shownQuestion.map((question, key) =>
      <QuestionEntry setQuestionId={setQuestionId}  shownQuestion={shownQuestion} setAnswerModalBody={setAnswerModalBody} isamodal={isamodal} setIsAModal={setIsAModal} currentProduct={currentProduct} questions={questions} setQuestions={setQuestions} helpSort={helpSort} request={request} question={question} key={key}/>)}
      </div>
      <div>
        <div>{none && <h2>NO MATCHING RESULTS</h2>}</div>
        {isqmodal && <QuestionModal setQuestions={setQuestions} request={request} currentProduct={currentProduct} isqmodal={isqmodal} setIsQModal={setIsQModal}/>}
        <button className="glow-on-hover" type="button" id='morequestionsbtn' onClick={handleMoreClick}>{moreButton}</button>
        <button onClick={handleAddQuestionClick} >ADD A QUESTION</button>
      </div>
    </div>
  );
};

export default QuestionsAnswers;