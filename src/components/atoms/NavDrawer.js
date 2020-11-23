import React from 'react';
import styled from 'styled-components';
import { Container, Typography } from './'

const Drawer = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 30px 30px 0 0;
	transform: translateY(${p => p.isNavOpen ? "15%" : "110%"} );
	background-color: white;
	position: absolute;
	overflow-y: hidden;
	transition: .75s;
	box-shadow: 0px -0.5px 10px rgba(0,0,0, .15);
	padding: 25px;
	box-sizing: border-box;
`;

const DrawerContainer = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	overflow: hidden;
	z-index: 1;
`

const NavContent = styled(Container)`
 > * {
		padding: 8px 0;
	}
`;

export const NavDrawer = ({ isNavOpen }) => {
	const [subNavIsOpen, setSubNavIsOpen] = React.useState(false);
	return (
		<DrawerContainer>
			<Drawer isNavOpen={isNavOpen}>
				<Container>
					<Typography size="xl" color="black" weight="900" padding="0 0 20px 0">EXPLORE</Typography>
					<NavContent padding="0">
						<Typography size="sm" color="black" weight="300">HOME</Typography>
						<Typography size="sm" color="black" weight="300">VAN LIFE SERIES</Typography>
						<Typography size="sm" color="black" weight="300">ABOUT</Typography>
						<Typography size="sm" color="black" weight="300">PORTFOLIO</Typography>
					</NavContent>
				</Container>
			</Drawer>
		</DrawerContainer>
	)
}