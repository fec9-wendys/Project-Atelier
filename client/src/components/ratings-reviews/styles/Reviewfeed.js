import styled from 'styled-components';

// &::-webkit-scrollbar {
//   display:none;
// }
export const ReviewEntries = styled.div`
  width: 100%;
  overflow: auto;
  max-height: 800px;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #ED1C24;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
  }

  `
  // background: rgba(255,0,0,0.8);

export const EntriesReviewerName = styled.span`
  position: absolute;
  right: px;
  top : 0px;
`

export const EntriesDate = styled.span`
  float:right;
  padding-right: 5px;
`

export const EntriesPhotos = styled.img`
  margin: 0px 5px;
  border: 1px solid black;
`

// max-width: 110px;
export const ReviewButtons = styled.button`

  align-content: center;

`

