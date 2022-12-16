import styled from "styled-components";

export const EntireOverview = styled.div`
  margin-top: 50px;
  margin-bottom: 40px;
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
  //Maybe?? box-sizing: border-box;
`

export const DescriptionContainer = styled.div`
  // Maybe? padding-top: 10px;
  font-size: 0.8em;
  min-height: 15%;
  padding-left: 5%;
  padding-bottom: 5%;
  // Maybe add after @media (max-width: 1600px) {
  //   font-size: 0.7em;
  // }
`

//might need to change padding-top TODO:
export const StylesContainer = styled.div`
  padding-top: 1vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  min-height: 15%;
  height: auto;
  padding-left: 5%;
  padding-top: 5%;
  // Maybe add after @media (max-width: 1600px) {
  //   grid-template-columns: repeat(3, 1fr);
  // }
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
  background-color: ${(props) => props.isDarkMode? "rgba(23, 23, 23, 0.7)" : "rgba(255, 255, 255, 0.7)"};
  z-index: 1000;
  @media (max-width: 1600px) {
    height: 75px;
  }
  @media (max-width: 1200px) {
    height: 50px;
  }
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

export const FeatureList = styled.div`
  padding-left: 3%;
  width: 33%;
  font-size: small;
  box-sizing: content-box;
  align-items: center;
  @media (max-width: 2100px) {
    font-size: x-small;
    line-height: 1.5em;
  }
`

export const QuarterStarContainer = styled.div`
  height: 36px;
  width: 25px;
  display: inline-block;
`

export const QuarterStarOutline = styled.img`
  height: 22px;
  width: 18px;
`

export const QuarterStarFill = styled.div`
  position: relative;
  display: inline-block;
  height: 22px;
  background-color: ${(props) => props.isDarkMode ? "white" : "#333333"};
`