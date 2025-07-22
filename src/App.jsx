import React from 'react'
import './App.css'
import { useState } from 'react'

function generatePhotos () {
  const photos = []
  for (let i = 378; i <= 611; i++) {
    if (i === 406 || i === 408 || i === 595) continue
    const number = String(i).padStart(5, '0')
    photos.push({
      id: i,
      src: `../src/assets/DSC${number}.jpg`,
      alt: `DSC${number}`
    })
  }
  return photos
}

const photos = generatePhotos()

function App () {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  function chosePhoto (photo) {
    setSelectedPhoto(photo)
  }
  function closePhoto () {
    setSelectedPhoto(null)
  }

  return (
    <div className='gallery'>
      {photos.map(photo => (
        <img
          key={photo.id}
          src={photo.src}
          alt={photo.alt}
          className='gallery-img'
          onClick={() => chosePhoto(photo)}
        />
      ))}
      {selectedPhoto && (
        <div className='modal' onClick={closePhoto}>
          <img
            src={selectedPhoto.src}
            alt={selectedPhoto.alt}
            className='modal-img'
            onClick={e => e.stopPropagation()}
          />
          <button
            className='close-btn'
            onClick={e => {
              e.stopPropagation()
              closePhoto()
            }}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  )
}

export default App
