import React, { useState, useEffect } from 'react'

const AddCart = ({ currentProductStyle }) => {

  const [sizes, setSizes] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [currSize, setCurrSize] = useState('');
  const [currQuantity, setCurrentQuantity] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    if (currentProductStyle !== null) {
      const sizeArray = [];
      const quantityArray = [];
      const values = Object.values(currentProductStyle.skus);
      values.forEach(value => {
        sizeArray.push(value.size);
        quantityArray.push(value.quantity);
      })
      setSizes(sizeArray);
      setQuantity(quantityArray);
    }
  }, [currentProductStyle])


  return (
    <div>
      {sizes[0]}{quantity[0]}
      <button onClick={e => handleClick(e)}>Add to Cart</button>
    </div>
  )
}

export default AddCart