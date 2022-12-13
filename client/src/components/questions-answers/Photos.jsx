import React from 'react'

const handleClick = () => {
  console.log('clicked')
}
const Photos = ({photo}) => {
  return (
    <img onClick={handleClick}src={photo.url} width='100' height='100'/>
  )
}
export default Photos