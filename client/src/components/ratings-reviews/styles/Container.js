import styled from 'styled-components';

export const TitleContainer = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 50px;
`;

export const ParentContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`

// flex-grow: 0;
// padding-left: 75px;
// min-width: 0;
export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding-left: 125px;

`

// padding-top: 50px;
// padding-left: 50px;
// min-width = 0;
export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  flex-grow: 9;
`

// flex-grow: 9;
export const RFButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  `
  // max-width: 800px;

export const RBContainer = styled.div`
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  gap: 2px;

`

export const RBRFTitle = styled.h1`
  margin: 0px;
  font-size: 28px;

`

export const PBContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px;
`

export const SortContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`

// gap: 100px 100px;
export const RFContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

`

// margin-bottom: 15px;
export const ReviewEntryContainer = styled.div`
  display: flex;
  border-bottom: 2px solid black;
  flex-direction: column;
`

export const ReviewButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

// gap: 5px 0px;
// margin-bottom: 5px;
export const StarBarsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`