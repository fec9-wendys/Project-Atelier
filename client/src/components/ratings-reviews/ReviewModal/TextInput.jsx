import React from 'react';
import axios from 'axios';
const {useState, useEffect} = React;

const TextInput = ({setNickName, setEmail, setSummary, setBody, chars}) => {

  const submitHandler = (e) => {
    e.preventDefault();

    request(`/reviews/?product_id=${currentProduct.id}`, 'POST')

  }

  const fileHandler = (e) => {
    const images = document.getElementById('image-upload').files[0];
    console.log(images);
  }

  return (
    <form>
      <label htmlFor="nickname">Nickname:</label> <br></br>
        <input type="text" id="nickname" name="nickname" maxLength = '60'
        placeholder = 'jackson11!' required onChange = {(e) => setNickName(e.target.value)}/><br></br>
      <div> For privacy reasons, do not use your full name or email address</div>
      <label htmlFor="email">Email:</label><br></br>
        <input type="text" id="email" name="email" maxLength = '60'
        placeholder = 'jackson11@gmail.com' required onChange = {(e) => setEmail(e.target.value)}/><br></br>
      <div> For authentication reasons, you will not be emailed</div>
      <label htmlFor="summary"> Summary: </label><br></br>
        <input type="text" id="summary" name="summary" maxLength = '60'
        placeholder = 'Best Purchase Ever!' onChange = {(e) => setSummary(e.target.value)}/><br></br>
      <label htmlFor="body"> Review Body:</label><br></br>
      <textarea type="text" id="body" name="body" rows='6' cols='50' maxLength = '1000'
      placeholder = 'Why did you like the product or not?' onChange = {(e) => setBody(e.target.value)}/><br></br>
      <p id = 'char-requirement'> {chars === 0 ? 'Minimum Reached' : `Minimum required characters left: ${chars}`}</p>
      <label htmlFor="images"> Image Uploads: (Up to 5) </label><br></br>
        <input id = 'image-upload' type = 'file' onChange = {fileHandler} multiple/>
        <input type="button" value="Submit Review" onClick = {submitHandler} disabled = {body.length <= 50 || rec === null}/>
    </form>
  )
}

export default TextInput;
