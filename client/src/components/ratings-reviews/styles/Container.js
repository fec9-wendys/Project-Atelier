import styled from 'styled-components';

// position: relative;
//   top: 30px;
//   height: 80vh;

// display: flex;
// align-items: center;
// justify-content: space-evenly;
// margin-top: 100px;

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

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  flex-grow: 0;
  padding-left: 150px;

`

// padding-top: 50px;
export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 9;
  align-items: center;
  padding-top: 10px;
  padding-left: 50px;
`

export const RFButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 9;
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
  padding: 0 50px;
`

export const SortContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`

export const RFContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
`

export const ReviewEntryContainer = styled.div`
  margin-bottom: 30px;
  border: 1px solid red;
`

export const ReviewButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const StarBarsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`