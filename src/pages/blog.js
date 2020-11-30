import React from 'react';
import { Link, graphql } from 'gatsby'
import styled from 'styled-components';
import { Nav, NavDrawer, Typography, Container, Chip } from '../components/atoms'
import { useRecoilValue, useRecoilState } from 'recoil';
import { isNavOpenAtom, dataAtom } from '../recoil/atoms'
import { BlogCard, BlogBanner } from '../components/blog'

const ChipContainer = styled(Container)`
	> * {
		margin-right: 10px;
	}
	flex-direction: row;
	position: absolute;
`;

const BlogCardContainer = styled(Container)`
	&:nth-child(2){
		margin-top: 65px;
	}
	padding: 5px 5px 20px 5px;
`;

export default ({ data }) => {
	const isNavOpen = useRecoilValue(isNavOpenAtom);
	const posts = data.allContentfulPost.edges
	const bannerImage = posts[0].node.image.fluid.src

	return (
		<>
			<Nav
				width="25px"
				widthHalf="12.5px"
				justifyContentTop="flex-start"
				justifyContentBot="flex-end"
			/>
			<NavDrawer isNavOpen={isNavOpen} />
			<Container >
				<Typography color="black" size="xl" weight="900" padding="0 0 20px 0">BLOGS</Typography>
				<BlogBanner url={bannerImage} />
				<Container padding="0">
					<ChipContainer>
						<Chip label="ALL" />
						<Chip label="VAN LIFE" />
						<Chip label="CODING" />
						<Chip label="35MM" />
					</ChipContainer>
					{
						posts.map((post, i) => {
							const { title, subtitle, createdAt, image, slug } = post.node
							return (
								<BlogCardContainer key={i}>
									<Link to={`/blog/${slug}`}>
										<BlogCard title={title} subtitle={subtitle} createdAt={createdAt} image={image.fluid.src} />
									</Link>
								</BlogCardContainer>
							)
						})
					}
				</Container>
			</Container>
		</>
	)
};

export const blogPageQuery = graphql`
	query {
		allContentfulPost {
			edges {
				node {
					image {
						fluid(quality: 100) {
							src
						}
					}
					title
					subtitle
					createdAt(formatString: "MMMM Do, YYYY")
					slug
				}
			}
		}
	}
`;