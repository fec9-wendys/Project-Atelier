import React, { useState, useEffect } from 'react'

const AddCart = ({ currentProductStyle }) => {

  // Alternate method of storing sizes+ quantities, will leave here in case of emergency
  // const [sizes, setSizes] = useState([]);
  // const [quantity, setQuantity] = useState([]);

  const [stock, setStock] = useState(null);
  const [currSize, setCurrSize] = useState('');
  const [currQuantity, setCurrentQuantity] = useState(NaN);

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

  //called when user selects size from dropdown
  const updateQuantity = (e) => {
    let selectedSize = e.target.value;
    setCurrSize(selectedSize);
    if (selectedSize === 'select-size') {
      setCurrentQuantity(null)
    } else {
      stock[selectedSize] < 15 ? setCurrentQuantity(stock[selectedSize]) : setCurrentQuantity(15);
    }
  }

  //click 'Add Cart' button event
  const handleClick = (e) => {
    console.log('i am clicked!')
    const sizeValue = document.getElementById('size-dropdown');
    const quantityValue = document.getElementById('quantity-dropdown');
    console.log(sizeValue.value, quantityValue.value);
  }

  if (stock !== null) {
    console.log('i am stock', stock)
    console.log('i am currSize', currSize)
    console.log('i am currQuantity, ', currQuantity)
    return (
      <div>
        {/* dropdown menu for size */}
        <label htmlFor="size-dropdown">Size: </label>
        <select className="dropdown" id="size-dropdown" onChange={e => updateQuantity(e)}>
          {Object.keys(stock).includes('null') ?
            <option value="out-of-stock" id="out-of-stock" defaultValue>Out of Stock</option>
            :
            <>
              <option value="select-size" defaultValue>Select Size</option>
              {Object.keys(stock).map((size, index) => {
                if (stock[size] !== 0) {
                  return <option key={index} value={size}>{size}</option>
                }
              })}
            </>
          }
        </select>

        {/* dropdown menu for quantity */}
        <label htmlFor="quantity-dropdown"> Quantity: </label>
        <select className="dropdown" id="quantity-dropdown">
          <option value="select-quantity" id="default-quantity" defaultValue>-</option>
          {currSize === '' || currQuantity === NaN || currQuantity === null ?
            <></>
            : <>
              {Array.apply(1, Array(currQuantity)).map((current, index) => {
                return <option key={index} value={index + 1}>{index + 1}</option>
              })
              }
            </>
          }
        </select>
        <button onClick={e => handleClick(e)} name="add-cart" id="add-cart">Add to Cart</button>
      </div>
    )

  } else return <></>
}

export default AddCart