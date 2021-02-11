import React from "react";
import styled from "styled-components";
import { Container, Typography, Button, Nav, NavDrawer, NavBar, Footer } from '../components/atoms';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FilmGallery } from '../components/analog';
import analog from '../images/analog.jpg';
import { useWindowDimensions } from '../hooks';

const ImageContainer = styled(Container)`
  background-image: url("${p => p.src}");
  background-size: cover;
`;

const IndexPage = ({ data }) => {
  const gallery = data.allContentfulFilmPhoto.edges
  const { width } = useWindowDimensions()
  return (
    <Container padding="0" width="100%">
      { width > 749 ?
        <NavBar light />
        :
        <>
          <Nav
            width="25px"
            widthHalf="12.5px"
            justifyContentTop="flex-start"
            justifyContentBot="flex-end"
          />
          <NavDrawer />
        </>
      }
      <ImageContainer
        justifyContent="center"
        alignItems="center"
        padding="0"
        height="100vh"
        width="100%"
        src={analog}>
        <Typography size="xxl" weight="900" color="white">HELLO,</Typography>
        <Typography size="xxl" weight="900" color="white" margin="-10px 0 0 0">I'M RAEL</Typography>
        <Typography size="24px" color="white" weight="300">AND I SHOOT FILM SOMETIMES.</Typography>
        <Typography size="24px" color="white" weight="300">35MM.</Typography>
        <Container padding="100px 0 20px 0" height="auto" width="auto" alignItems="center">
          <AnchorLink href="#gallery">
            <Button theme="dark" fontSize="xxs" padding="30px 75px">VIEW</Button>
          </AnchorLink>
        </Container>
      </ImageContainer>
      <FilmGallery gallery={gallery} />
      <Footer />
    </Container>
  )
}

export default IndexPage

export const filmGalleryQuery = graphql`
	query {
    allContentfulFilmPhoto {
      edges {
        node {
          filmPhoto {
            fluid(quality: 100) {
              src
            }
          }
        }
      }
    }
	}
`;
