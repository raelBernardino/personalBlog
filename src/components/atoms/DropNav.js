import React from 'react';
// import styled from 'styled-components';
import { Link } from 'gatsby'
import { Container, Typography } from './'

export const DropNav = ({ onClick, navTag, isOpen, subNavs }) => (
	<Container padding="0" onClick={onClick}>
		<Typography size="sm" color="black" weight="300">{navTag}</Typography>
		{isOpen ?
			<Container padding="10px 10px 10px 20px">
				{subNavs.map((link, i) => (
					<Link>
						<Typography color="black" size="sm" weight="300">{link.title.toUpperCase()}</Typography>
					</Link>
				))}
			</Container>
			: ""
		}
	</Container>
)