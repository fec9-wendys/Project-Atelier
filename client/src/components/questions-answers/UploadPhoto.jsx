import React from 'react'

const UploadPhoto = ({photo}) => {
return (
  <img width={photo ? '80' : '0'} height={photo ? '80' : '0'} src={photo}/>
)
}
export default UploadPhoto;