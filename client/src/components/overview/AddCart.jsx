import React, { useState, useEffect } from 'react'

const AddCart = ({ currentProductStyle, request }) => {

  // Alternate method of storing sizes+ quantities, will leave here in case of emergency
  // const [sizes, setSizes] = useState([]);
  // const [quantity, setQuantity] = useState([]);

  const [stock, setStock] = useState(null);
  const [currSize, setCurrSize] = useState('select-size');
  const [currQuantity, setCurrentQuantity] = useState(NaN);
  const [currSKU, setCurrSKU] = useState(NaN);

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

  useEffect(() => {
    const skukeys = Object.keys(currentProductStyle.skus);
    for (let i = 0; i < skukeys.length; i++) {
      if (currentProductStyle.skus[skukeys[i]].size === currSize) {
        setCurrSKU(skukeys[i]);
        break;
      }
    }
  }, [currSize])

  //called when user selects size from dropdown
  const updateQuantity = (e) => {
    let selectedSize = e.target.value;
    setCurrSize(selectedSize);
    if (selectedSize === 'select-size') {
      setCurrentQuantity(NaN)
    } else {
      stock[selectedSize] < 15 ? setCurrentQuantity(stock[selectedSize]) : setCurrentQuantity(15);
    }
  }

  //User clicks 'Add Cart' button event function
  // TODO: need to force dropdown menu
  const handleClick = (e) => {
    e.preventDefault();
    const sizeValue = document.getElementById('size-dropdown').value;
    const quantityValue = document.getElementById('quantity-dropdown').value;
    const body = { sku_id: currSKU };
    if (currSize === 'select-size') {
      alert('Select size please!');
    } else {
      request('/cart', 'POST', body, (err, response) => {
        if (err) {
          console.log(err);
        } else {
          console.log(response)
        }
      })
    }
  }

  if (stock !== null) {
    return (
      <div>
        {/* dropdown menu for size */}
        <label htmlFor="size-dropdown">Size: </label>
        <select className="dropdown" id="size-dropdown" onChange={e => updateQuantity(e)}>
          {Object.keys(stock).includes('null') ?
            <option value="out-of-stock" id="out-of-stock" defaultValue>Out of Stock</option>
            :
            <>
              <option value="select-size" id="select-size" defaultValue>Select Size</option>
              {Object.keys(stock).map((size, index) => {
                if (stock[size] !== 0) {
                  return <option key={index} value={size} id={size}>{size}</option>
                }
              })}
            </>
          }
        </select>

        {/* dropdown menu for quantity */}
        <label htmlFor="quantity-dropdown"> Quantity: </label>
        <select className="dropdown" id="quantity-dropdown">
          {currSize === 'select-size' ?
            <option value="select-quantity" id="default-quantity" defaultValue>-</option>
            : <>
              {Array.apply(1, Array(currQuantity)).map((current, index) => {
                return <option key={index} value={index + 1}>{index + 1}</option>
              })
              }
            </>
          }
        </select>
        {Object.keys(stock).includes('null') ?
          <></>
          :
          <button onClick={e => handleClick(e)} name="add-cart" id="add-cart">Add to Cart</button>
        }
      </div>
    )

  } else return <></>
}

export default AddCart