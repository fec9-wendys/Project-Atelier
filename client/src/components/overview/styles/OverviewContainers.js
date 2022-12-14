import styled from "styled-components";

export const EntireOverview = styled.div`
  padding: 10px;
`

export const OverviewGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 800px;
  line-height: 1em;
  gap: 1%
`

export const Cart = styled.div`
  padding: 5%;
  line-height: 2.5em;
`

export const LeftFlexBox = styled.div`
display: flex;
  box-sizing: border-box;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  width: 35%;
  position: relative;
  height: 800px;
  max-width: 800px;
`

export const RightFlexBox = styled.div`
  display: flex;
  min-width: 307px;
  width: 20%;
  flex-flow: column nowrap;
  height: 800px;
  max-width: 400px;
`

export const Ratings = styled.div`
  font-size: 0.8em;
  line-height: 1.3em;
  height: 10%;
  padding: 5%;
`

export const DescriptionContainer = styled.div`
  font-size: 0.8em;
  min-height: 15%;
  padding-left: 5%;
  padding-bottom: 5%;
`

export const StylesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  min-height: 15%;
  height: auto;
  padding-left: 5%;
  padding-top: 5%;
`

export const FeaturesContainer = styled.div`
  display: flex;
  max-width: 42vw;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  line-height: 1.5em;
  font-size: small;
`

export const ThumbnailCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  position: absolute;
  bottom: 1.5rem;
  width: 100%;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 1000;
`

export const ThumbnailImages = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const DotIcons = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  cursor: pointer;
  transform: translateX(-50%);
`

export const Icons = styled.div`
  display: flex;
  bottom: 5px;
`