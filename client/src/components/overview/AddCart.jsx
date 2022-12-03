import React, { useState, useEffect } from 'react'

const AddCart = ({ currentProductStyle }) => {

  // Alternate method of storing sizes+ quantities, will leave here in case of emergency
  // const [sizes, setSizes] = useState([]);
  // const [quantity, setQuantity] = useState([]);

  const [stock, setStock] = useState(null);
  const [currSize, setCurrSize] = useState('');
  const [currQuantity, setCurrentQuantity] = useState(9);

  const handleClick = (e) => {
    console.log('i am clicked!')
  }

  useEffect(() => {
    const supply = {};
    const values = Object.values(currentProductStyle.skus);
    values.forEach(value => {
      let sized = value.size;
      let quantity = value.quantity;
      supply[sized] = quantity;
    })
    setStock(supply);
  }, [])

  const updateQuantity = (e) => {
    let selectedSize = e.target.value;
    stock[selectedSize] < 15 ? setCurrentQuantity(stock[selectedSize]) : setCurrentQuantity(15);
  }

  if (stock !== null) {

    return (
      <div>
        <label htmlFor="size-dropdown">Size: </label>
        <select className="dropdown" id="size-dropdown" onChange={e => updateQuantity(e)}>
          <option value="select-size" defaultValue>Select Size</option>
          {Object.keys(stock).map((size, index) => {
            if (stock[size] !== 0) {
              return <option key={index} value={size}>{size}</option>
            }
          })}
        </select>


        <label htmlFor="quantity-dropdown"> Quantity: </label>
        <select className="dropdown" id="quantity-dropdown">
          <option value="select-quantity" id="default-quantity" defaultValue>Select Quantity</option>
          {Array.apply(1, Array(currQuantity)).map((current, index) => {
            return <option key={index} value={index + 1}>{index + 1}</option>
          })
          }
        </select>
        <button onClick={e => handleClick(e)}>Add to Cart</button>
      </div>
    )

  } else return <></>
}

export default AddCart