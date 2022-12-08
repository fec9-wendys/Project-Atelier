import React from 'react'

const UploadPhoto = ({photo}) => {
return (
  <img width={photo ? '100' : '0'} height={photo ? '100' : '0'} src={photo}/>
)
}
export default UploadPhoto;