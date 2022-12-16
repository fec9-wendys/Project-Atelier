import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Cart } from './styles/OverviewContainers';

const AddCart = ({ stock, currentProduct, currentProductStyle, request, outfit, setOutfit }) => {

  // Alternate method of storing sizes+ quantities, will leave here in case of emergency
  // const [sizes, setSizes] = useState([]);
  // const [quantity, setQuantity] = useState([]);

  const [currSize, setCurrSize] = useState('select-size');
  const [currQuantity, setCurrentQuantity] = useState(NaN);
  const [currSKU, setCurrSKU] = useState(NaN);

  //sets state for stock on component mount when page loads or product/style changes
  useEffect(() => {
    setCurrSKU(NaN);
  }, [stock])

  useEffect(() => {
    setCurrSize('select-size');
    document.getElementById('size-dropdown').value = 'select-size';
  }, [currentProductStyle])



  //looks at the size selected to set the correct sku_id, which contains size and quantity properties
  useEffect(() => {
    const skukeys = Object.keys(currentProductStyle.skus);
    for (let i = 0; i < skukeys.length; i++) {
      if (currentProductStyle.skus[skukeys[i]].size === currSize) {
        setCurrSKU(skukeys[i]);
        break;
      }
    }
  }, [currSize])

  //called when user selects size from dropdown to change quantity settings on dropdown
  const updateQuantity = (e) => {
    document.getElementById('add-cart').disabled = false;
    let selectedSize = e.target.value;
    setCurrSize(selectedSize);
    if (selectedSize === 'select-size') {
      setCurrentQuantity(NaN)
    } else {
      stock[selectedSize] < 15 ? setCurrentQuantity(stock[selectedSize]) : setCurrentQuantity(15);
    }
  }


  //-------------------- add cart button use effecdt

  useEffect(() => {
    if (document.getElementById('add-cart')) {
      if (currSize === 'select-size') {
        document.getElementById('add-cart').disabled = true;
      } else {
        document.getElementById('add-cart').disabled = false;
      }
    }
  }, [currSize])

  const cartButtons = document.querySelectorAll('.cart-button');

  cartButtons.forEach(button => {
    button.addEventListener('click', cartClick);
  });

  function cartClick() {
    let button = this;
    button.classList.add('clicked');
  }

  //User clicks 'Add Cart' button event function
  // TODO: need to force dropdown menu
  const handleCartClick = (e) => {


    e.preventDefault();
    const sizeValue = document.getElementById('size-dropdown').value;
    const quantityValue = document.getElementById('quantity-dropdown').value;
    const body = { sku_id: currSKU };
    if (currSize === 'select-size') {

      document.getElementById('add-cart').disabled = true;
      alert('Select size please!');
    } else {
      request('/cart', 'POST', body, (err, response) => {
        if (err) {
          console.log(err);
        } else {
          console.log('finsie')
          // window.location.reload()
          // return false;
          setCurrSize('select-size');
          document.getElementById('size-dropdown').value = 'select-size'
          console.log('Added to cart!')
        }
      })
    }
  }

  //'Add to Outfit' Click function
  const handleOutfitClick = (e) => {
    if (outfit.length === 0) {
      setOutfit([currentProduct]);
      console.log('Added Product to Outfit!');
      return;
    }

    const allOutfitIDs = outfit.map(item => {
      return item.id;
    });

    if (allOutfitIDs.includes(currentProduct.id)) {
      console.log('This style is already in outfit!');
    } else {
      setOutfit([...outfit, currentProduct]);
      console.log('Added to Outfit!');
    }
  }


  return (
    <Cart>
      <div id="cart-dropdowns">
        {/* dropdown menu for size */}
        <div id="size-container">
          <div>
            <label htmlFor="size-dropdown" className='custom-selector2'>Size: {/*&emsp;&emsp;&nbsp;&ensp;&emsp;&ensp;*/}
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
            </label>
          </div>
        </div>

        {/* dropdown menu for quantity */}




        <div id="quantity-container">
          <div>
            <label htmlFor="quantity-dropdown" className='custom-selector2'> Quantity: &nbsp;&emsp;&emsp;
              <select className="dropdown" id="quantity-dropdown">
                {currSize === 'select-size' ?
                  <option value="select-quantity" id="default-quantity" defaultValue>---</option>
                  : <>
                    {Array.apply(1, Array(currQuantity)).map((current, index) => {
                      return <option key={index} value={index + 1}>{index + 1}</option>
                    })
                    }
                  </>
                }
              </select>
            </label>
          </div>
        </div>
      </div>

      <br />

      {Object.keys(stock).includes('null') ?
        <></>
        :
        <div>
          <button onClick={e => handleCartClick(e)} id="add-cart" className="cart-button">
            <span className="add-to-cart">Add to Cart</span>
            <span className="added">Add to Cart</span>
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-box"></i>
          </button>
          {/* <a className="youtube-link" href="https://youtu.be/BVdTKEi269Y" target="_blank" rel="noreferrer">https://youtu.be/BVdTKEi269Y</a> */}
        </div>
      }






      <div id="add-outfit">
        {outfit.includes(currentProduct) ?
          <button id="added-outfit-button" className="btn" > Added to Outfit! <span style={{ color: 'white' }}>&#10084;</span></button>
          : <button id="add-outfit-button" className="btn" onClick={e => handleOutfitClick(e)}> Add to Outfit &#10084;</button>
        }
      </div>
    </Cart>
  )
}

export default AddCart