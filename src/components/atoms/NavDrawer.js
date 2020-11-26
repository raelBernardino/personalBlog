import React from 'react';
import styled, { keyframes } from 'styled-components';
import { isNavOpenAtom } from '../../recoil/atoms';
import { Container, Typography } from './'

const drawerFadeAnimation = keyframes`
	0%   { background: transparent }
	100%  { background: rgba(0, 0, 0, .25)}
`;

const drawerFadeOutAnimation = keyframes`
	0%  { background: rgba(0, 0, 0, .25)}
	100%   { background: transparent }
`;

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
	animation-name: ${p => p.isNavOpen ? drawerFadeAnimation : drawerFadeOutAnimation};
	animation-duration: 1.5s;
	animation-iteration-count: 1;
	animation-fill-mode: forwards;
`

const NavContent = styled(Container)`
 > * {
		padding: 8px 0;
	}
`;

export const NavDrawer = ({ isNavOpen }) => {
	const [subNavIsOpen, setSubNavIsOpen] = React.useState(false);

	return (
		<DrawerContainer isNavOpen={isNavOpen}>
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