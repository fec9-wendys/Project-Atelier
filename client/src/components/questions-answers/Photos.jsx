import React from 'react'

const Photos = ({photo}) => {
  return (
    <img src={photo.url} width='100' height='100'/>
  )
}
export default Photos