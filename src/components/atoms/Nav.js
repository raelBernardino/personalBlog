import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isNavOpenAtom, isNavPrioritizedAtom } from '../../recoil/atoms';

const Bar = styled.div`
	height: 4px;
	width: ${p => p.width};
	background-color: white;
	border-radius: 5px;
`;

const BarContainer = styled.div`
	display: flex;
	justify-content: ${p => p.justifyContent};
	padding: 2.5px 0 2.5px 0;
	width: 100%;
`;

const Burger = styled.div`
	background-color: rgba(0, 0, 0, .25);
	border-radius: 10px;
	padding: 7.5px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	// justify-content: center;
	// align-items: center;
	position: fixed;
	top: 20px;
	right: 20px;
	z-index: 2;
`;

export const Nav = ({ width, widthHalf, justifyContentTop, justifyContentBot }) => {
	const [isNavOpen, setIsNavOpen] = useRecoilState(isNavOpenAtom);
	const [, setIsNavPrioritized] = useRecoilState(isNavPrioritizedAtom);
	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
		if (isNavOpen) {
			setTimeout(() => {
				setIsNavPrioritized(false)
			}, 500)
		}
		else setIsNavPrioritized(true)
	};
	return (
		<Burger onClick={toggleNav}>
			<BarContainer justifyContent={justifyContentTop}>
				<Bar width={widthHalf} />
			</BarContainer>
			<BarContainer>
				<Bar width={width} />
			</BarContainer>
			<BarContainer justifyContent={justifyContentBot}>
				<Bar width={widthHalf} />
			</BarContainer>
		</Burger>
	)
}