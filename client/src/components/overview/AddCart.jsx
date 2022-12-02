import React, { useState, useEffect } from 'react'

const AddCart = ({ currentProductStyle }) => {

  const [size, setSize] = useState(undefined);
  const [quantity, setQuantity] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
  }

  if (currentProductStyle !== null) {
    const supplyList = currentProductStyle.skus
    console.log(supplyList)

    return (
      <div>
        <button onClick={e => handleClick(e)}>Add to Cart</button>
      </div>
    )

  } else return <></>
}

export default AddCart