import React from "react"
import styled from "styled-components"
import { Container, Typography, Nav, NavDrawer, Image } from '../components/atoms'
import mainimg from '../images/main.jpg'

const CurvedImage = styled(Image)`
  padding: 20px;
  box-sizing: border-box;
  border-radius: 0 0 30px 30px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, .15);
  background-position: 70%;
  background-size: 175%;
  background-position-y: 13%;
`;

const IndexPage = () => (
  <Container padding="0" height="100vh" width="100%">
    <Nav
      width="25px"
      widthHalf="12.5px"
      justifyContentTop="flex-start"
      justifyContentBot="flex-end"
    />
    <NavDrawer />
    <CurvedImage src={mainimg} height="60%">
      <Typography size="xl" color="white" weight="900">HOME</Typography>
    </CurvedImage>
    <Container height="40%" padding="32px">
        <Typography size="xxl" weight="900" color="#333">HELLO,</Typography>
        <Typography size="xxl" weight="900" color="#333" margin="-10px 0 0 0">I'M RAEL</Typography>
      <Container justifyContent="flex-end" padding="0">
        <Typography size="24px" color="#333" weight="300">DEVELOPER</Typography>
        <Typography size="24px" color="#333" weight="300">UI/UX DESIGNER</Typography>
        <Typography size="24px" color="#333" weight="300">FREELANCE</Typography>
      </Container>
    </Container>
  </Container>
)

export default IndexPage
