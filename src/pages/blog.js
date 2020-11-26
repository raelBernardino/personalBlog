import React from 'react';
import styled from 'styled-components';
import { Nav, NavDrawer, Typography, Container, Chip } from '../components/atoms'
import { useRecoilValue } from 'recoil';
import { isNavOpenAtom } from '../recoil/atoms'
import { BlogCard } from '../components/blog'

const ChipContainer = styled(Container)`
	> * {
		margin-right: 10px;
	}
	flex-direction: row;
	position: absolute;
`;

const BlogCardContainer = styled(Container)`
	margin-top: 65px;
	padding: 5px;
`;

export default () => {
	const isNavOpen = useRecoilValue(isNavOpenAtom)
	return (
		<>
			<Nav
				width="25px"
				widthHalf="12.5px"
				justifyContentTop="flex-start"
				justifyContentBot="flex-end"
			/>
			<NavDrawer isNavOpen={isNavOpen} />
			<Container>
				<ChipContainer>
					<Chip label="ALL" />
					<Chip label="VAN LIFE" />
					<Chip label="CODING" />
					<Chip label="35MM" />
				</ChipContainer>
				<BlogCardContainer>
					<BlogCard />
				</BlogCardContainer>
			</Container>
		</>
	)
};