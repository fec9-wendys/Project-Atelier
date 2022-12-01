import React from 'react'
import Photos from './Photos.jsx'

const AnswerEntry = ({answer}) => {

  const adate = new Date(answer.date.slice(0,10)).toString()
  const date2 = adate.slice(0,10)

  return (
    <div>
      <h5> A: {answer.body}</h5>
      <span>
      {answer.photos.length > 0 &&
      answer.photos.map((photo, key)=>
       <Photos key={key} photo={photo}/>)}
      <p>by {answer.answerer_name}, {date2} | Helpful? <u>Yes</u> ({answer.helpfulness}) | <u>Report</u> </p>
      </span>
    </div>
  )
}

export default AnswerEntry;