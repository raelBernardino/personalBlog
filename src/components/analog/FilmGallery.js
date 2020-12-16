import React from 'react';
import { Container } from '../atoms'

// const Photo = styled.div`
//   width: 100%;
//   height: auto;
//   background-image: url("${p => p.src}");
//   background-size: contain;
// `

export const FilmGallery = ({ gallery }) => {
  const photoGallery = gallery
  console.log(photoGallery)
  return (
    <Container>
      <Container padding="0">
        {
          photoGallery.map((photo, i) => (
            <img alt="not available" src={photo.node.filmPhoto[0].fluid.src} />
          ))
        }
      </Container>
    </Container>
  )
}