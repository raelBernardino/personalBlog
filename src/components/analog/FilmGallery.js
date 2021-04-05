import React from 'react';
import styled from 'styled-components';
import { Container } from '../atoms';

// const Photo = styled.div`
//   width: 100%;
//   height: auto;
//   background-image: url("${p => p.src}");
//   background-size: contain;
// `

const GalleryContainer = styled(Container)`

`;

const Gallery = styled(Container)`
  padding: 0;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  /* @media screen and (min-width: 750px) {
    > * {
      height: 585px;
      margin-right: 1.45rem;
    }
  } */
`;

export const FilmGallery = ({ gallery }) => {
  const photoGallery = gallery
  return (
    <GalleryContainer id="gallery">
      <Gallery padding="0">
        {
          photoGallery.map((photo, i) => (
            <img key={i} alt="not available" src={photo.node.filmPhoto[0].fluid.src} />
          ))
        }
      </Gallery>
    </GalleryContainer>
  )
}