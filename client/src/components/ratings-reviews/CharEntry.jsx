import React from 'react';
import axios from 'axios';
const {useState, useEffect} = React;
import {ModalCharEntryContainer} from './styles/Container';
import styled from 'styled-components';

const CharEntryQuestion = styled.div`
  font-size: large;
  margin-bottom: 5px;
`

const CharEntry = ({charKey, setSize, setWidth, setComfort, setQuality, setLength, setFit}) => {

  if (charKey === 'Size') {
    return (
      <ModalCharEntryContainer>
        <CharEntryQuestion> How do you rate the {charKey}? </CharEntryQuestion>
        <input type="radio" id="one-button" name="size" value = '1' onChange = {(e) => setSize(1)} required/>
        <label htmlFor = '1'> A size too small </label><br></br>
        <input type="radio" id="two-button" name="size" value = '2' onChange = {(e) => setSize(2)}/>
        <label htmlFor = '2'> 1/2 a size too small </label><br></br>
        <input type="radio" id="three-button" name="size" value = '3' onChange = {(e) => setSize(3)}/>
        <label htmlFor = '3'> Perfect </label><br></br>
        <input type="radio" id="four-button" name="size" value = '4' onChange = {(e) => setSize(4)}/>
        <label htmlFor = '4'> 1/2 a size too big </label><br></br>
        <input type="radio" id="five-button" name="size" value = '5' onChange = {(e) => setSize(5)}/>
        <label htmlFor = '5'> A size too wide </label><br></br>
      </ModalCharEntryContainer>
    );
  }

  if (charKey === 'Width') {
    return (
      <ModalCharEntryContainer>
        <CharEntryQuestion> How do you rate the {charKey}? </CharEntryQuestion>
        <input type="radio" id="one-button" name="width" value = '1' onChange = {(e) => setWidth(1)} required/>
        <label htmlFor = '1'> Too narrow </label><br></br>
        <input type="radio" id="two-button" name="width" value = '2' onChange = {(e) => setWidth(2)}/>
        <label htmlFor = '2'> Slightly narrow </label><br></br>
        <input type="radio" id="three-button" name="width" value = '3' onChange = {(e) => setWidth(3)}/>
        <label htmlFor = '3'> Perfect </label><br></br>
        <input type="radio" id="four-button" name="width" value = '4' onChange = {(e) => setWidth(4)}/>
        <label htmlFor = '4'> Slightly wide </label><br></br>
        <input type="radio" id="five-button" name="width" value = '5' onChange = {(e) => setWidth(5)}/>
        <label htmlFor = '5'> Too wide </label><br></br>
      </ModalCharEntryContainer>
    );
  }

  if (charKey === 'Comfort') {
    return (
      <ModalCharEntryContainer>
        <CharEntryQuestion> How do you rate the {charKey}? </CharEntryQuestion>
        <input type="radio" id="one-button" name="comfort" value = '1' onChange = {(e) => setComfort(1)} required/>
        <label htmlFor = '1'> Uncomfortable </label><br></br>
        <input type="radio" id="two-button" name="comfort" value = '2' onChange = {(e) => setComfort(2)}/>
        <label htmlFor = '2'> Slightly uncomfortable </label><br></br>
        <input type="radio" id="three-button" name="comfort" value = '3' onChange = {(e) => setComfort(3)}/>
        <label htmlFor = '3'> Ok </label><br></br>
        <input type="radio" id="four-button" name="comfort" value = '4' onChange = {(e) => setComfort(4)}/>
        <label htmlFor = '4'> Comfortable </label><br></br>
        <input type="radio" id="five-button" name="comfort" value = '5' onChange = {(e) => setComfort(5)}/>
        <label htmlFor = '5'> Perfect </label><br></br>
      </ModalCharEntryContainer>
    );
  }

  if (charKey === 'Quality') {
    return (
      <ModalCharEntryContainer>
        <CharEntryQuestion> How do you rate the {charKey}? </CharEntryQuestion>
        <input type="radio" id="one-button" name="quality" value = '1' onChange = {(e) => setQuality(1)} required/>
        <label htmlFor = '1'> Poor </label><br></br>
        <input type="radio" id="two-button" name="quality" value = '2' onChange = {(e) => setQuality(2)}/>
        <label htmlFor = '2'> Below average </label><br></br>
        <input type="radio" id="three-button" name="quality" value = '3' onChange = {(e) => setQuality(3)}/>
        <label htmlFor = '3'> What I expected </label><br></br>
        <input type="radio" id="four-button" name="quality" value = '4' onChange = {(e) => setQuality(4)}/>
        <label htmlFor = '4'> Pretty great </label><br></br>
        <input type="radio" id="five-button" name="quality" value = '5' onChange = {(e) => setQuality(5)}/>
        <label htmlFor = '5'> Perfect </label><br></br>
      </ModalCharEntryContainer>
    );
  }

  if (charKey === 'Length') {
    return (
      <ModalCharEntryContainer>
        <CharEntryQuestion> How do you rate the {charKey}? </CharEntryQuestion>
        <input type="radio" id="one-button" name="length" value = '1' onChange = {(e) => setLength(1)} required/>
        <label htmlFor = '1'> Runs short </label><br></br>
        <input type="radio" id="two-button" name="length" value = '2' onChange = {(e) => setLength(2)}/>
        <label htmlFor = '2'> Runs slightly short </label><br></br>
        <input type="radio" id="three-button" name="length" value = '3' onChange = {(e) => setLength(3)}/>
        <label htmlFor = '3'> Perfect </label><br></br>
        <input type="radio" id="four-button" name="length" value = '4' onChange = {(e) => setLength(4)}/>
        <label htmlFor = '4'> Runs slightly long </label><br></br>
        <input type="radio" id="five-button" name="length" value = '5' onChange = {(e) => setLength(5)}/>
        <label htmlFor = '5'> Runs long </label><br></br>
      </ModalCharEntryContainer>
    );
  }

  if (charKey === 'Fit') {
    return (
      <ModalCharEntryContainer>
        <CharEntryQuestion> How do you rate the {charKey}? </CharEntryQuestion>
        <input type="radio" id="one-button" name="fit" value = '1' onChange = {(e) => setFit(1)} required/>
        <label htmlFor = '1'> Runs Tight </label><br></br>
        <input type="radio" id="two-button" name="fit" value = '2' onChange = {(e) => setFit(2)}/>
        <label htmlFor = '2'> Runs slightly tight </label><br></br>
        <input type="radio" id="three-button" name="fit" value = '3' onChange = {(e) => setFit(3)}/>
        <label htmlFor = '3'> Perfect </label><br></br>
        <input type="radio" id="four-button" name="fit" value = '4' onChange = {(e) => setFit(4)}/>
        <label htmlFor = '4'> Runs slightly long </label><br></br>
        <input type="radio" id="five-button" name="fit" value = '5' onChange = {(e) => setFit(5)}/>
        <label htmlFor = '5'> Runs long </label><br></br>
      </ModalCharEntryContainer>
    );
  }
}

export default CharEntry;