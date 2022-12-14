import styled from 'styled-components';

export const TitleContainer = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 50px;
`;

export const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 900px;

`

// max-width: 600px;
export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  height: 900px;


`
// margin-left: 100px;
export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  flex-grow: 1;
  height: 900px;
  margin-left: 100px;

`

// flex-grow: 9;
// export const RFButtonsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   width: 100%;
// `

// max-width: 800px;

// export const RBContainer = styled.div`
//   padding: 0 50px;
//   display: flex;
//   flex-direction: column;
//   gap: 2px;

// `

export const RBRFTitle = styled.h1`
  margin: 0px;
  font-size: xx-large;

`

// export const PBContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 0 50px;
// `

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
  padding-bottom: 8px;
  margin-bottom: 12px;
  flex-direction: column;
`

export const ReviewButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

// gap: 5px 0px;
// margin-bottom: 5px;
// align-items: center;
// display:flex;
export const StarBarsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: hand;
  cursor: pointer;
  min-height: 27px;

  &:hover {
    color: #3366CC;
  }
`

// Modal Containers

export const ModalContainer = styled.div`
  border: 3px solid black;
  overflow: auto;

`

// padding-bottom: 24px;
export const ModalTopContainer = styled.div`
  margin: 12px 0px;
  border-bottom: 1px solid black;
`

export const ModalBottomContainer = styled.div`
  display: flex;
  flex-direction: column;

`

export const ModalCharContainer = styled.div`
  margin: 10px 0px;
`

export const ModalCharEntryContainer = styled.div`
  margin: 20px 0px;
`

export const ModalNicknameContainer = styled.div`

`

export const ModalEmailContainer = styled.div`

`

export const ModalTitleContainer = styled.h1`
  display: flex;
  position: sticky;
  justify-content: space-between;
  top: 0;
  left: 0;
  background-color: white;
  margin-top: 0;
  padding-top: 25px;
  padding-bottom: 25px;
  z-index: 1001;
  font-size: xx-large;

`
