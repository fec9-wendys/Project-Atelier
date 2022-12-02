import React, {useState, useEffect} from 'react'

const AddCart = (styles) => {

  const handleClick = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <button onClick={e => handleClick(e)}>Add to Cart</button>
    </div>
  )
}

export default AddCart