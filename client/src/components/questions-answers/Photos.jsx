import React from 'react'


const Photos = ({setAPhotoModalImg, setIsAPhotoModal, photo}) => {
  const handleClick = () => {
    setIsAPhotoModal(true)
    setAPhotoModalImg(photo.url)
  }
  return (
    <img id="answerphotos" onClick={handleClick}src={photo.url} width='100' height='100'/>
  )
}
export default Photos