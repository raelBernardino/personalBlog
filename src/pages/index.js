import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Container, Typography, Nav, NavDrawer, NavBar, Image } from '../components/atoms'
import mainimg from '../images/main.jpg'
import { useWindowSize } from '../hooks'


const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const HomeContainer = styled(Container)`
  width: 100%;
  height: 100vh;
  @media screen and (min-width: 750px) {
  min-height: 100vh;
    flex-direction: row;
  }
`

const CurvedImage = styled(Image)`
  box-sizing: border-box;
  border-radius: 0 0 30px 30px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, .15);
  background-position: 70%;
  background-size: 175%;
  background-position-y: 13%;
  @media screen and (min-width: 750px) {
    height: 100vh;
    width: 100%;
    background-size: cover;
    border-radius: 0;
  }
`;

const TextContainer = styled(Container)`
  height: 40%;
  @media screen and (min-width: 750px) {
    height: 100%;
    justify-content: flex-end;
  }
`;

const HeaderTypography = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 800;
  line-height: 1.25;
  font-size: 64px;
  @media screen and (min-width: 950px) {
    font-size: 80px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 132px;
  }
`;

const IndexPage = () => {
  const { width } = useWindowSize()
  const [screenWidth, setScreenWidth] = useState(null)

  useEffect(() => {
    setScreenWidth(screenWidth)
  }, [width])

  return (
    <Wrapper>
      <HomeContainer padding="0" width="100%">
        {screenWidth > 749 ?
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
        <CurvedImage src={mainimg} height="60%" width={width} />
        <TextContainer padding="32px">
          <HeaderTypography weight="900" color="#333">HELLO,</HeaderTypography>
          <HeaderTypography weight="900" color="#333" margin="-10px 0 0 0">I'M RAEL</HeaderTypography>
          <Container height={width > 749 && "auto"} justifyContent="flex-end" padding="0">
            <Typography size="24px" color="#333" weight="300">DEVELOPER</Typography>
            <Typography size="24px" color="#333" weight="300">UI/UX DESIGNER</Typography>
            <Typography size="24px" color="#333" weight="300">FREELANCE</Typography>
          </Container>
        </TextContainer>
      </HomeContainer>
    </Wrapper>
  )
}

export default IndexPage
