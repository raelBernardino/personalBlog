import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby'
import styled from 'styled-components';
import { Nav, NavDrawer, Typography, Container, Chip, Footer } from '../components/atoms'
import { useRecoilValue } from 'recoil';
import { isNavOpenAtom } from '../recoil/atoms'
import { BlogCard, BlogBanner } from '../components/blog'

const ChipContainer = styled(Container)`
	> * {
		margin-right: 10px;
		white-space: nowrap;
	}
	flex-direction: row;
	position: absolute;
	overflow: auto;
	height: auto;
`;

const BlogCardContainer = styled(Container)`
	&:nth-child(2){
		margin-top: 60px;
	}
	padding: 5px 5px 20px 5px;
`;

const BlogContainer = styled(Container)`
	min-height: 100vh;
`;

const NoBlogsContainer = styled(Container)`
	margin-top: 80px;
`;

export default ({ data }) => {
	const isNavOpen = useRecoilValue(isNavOpenAtom);
	const [filteredPosts, setFilteredPosts] = useState([])
	const posts = data.allContentfulPost.edges
	const bannerImage = posts[0].node.image.fluid.src
	const tags = data.allContentfulBlogTags.edges

	useEffect(() => {
		data && setFilteredPosts(posts)
	}, [data])

	const filterPosts = (tag) => {
		let tempFilteredPost = posts
		if (tag === "all") setFilteredPosts(tempFilteredPost)
		else setFilteredPosts(tempFilteredPost.filter(post => post.node.tag === tag))
	}

	return (
		<>
			<Nav
				width="25px"
				widthHalf="12.5px"
				justifyContentTop="flex-start"
				justifyContentBot="flex-end"
			/>
			<NavDrawer isNavOpen={isNavOpen} />
			<BlogContainer>
				<Typography color="black" size="xl" weight="900" padding="0 0 20px 0">BLOGS</Typography>
				<BlogBanner url={bannerImage} />
				<Container padding="0" minHeight="80px">
					<ChipContainer>
						<Chip label="ALL" onClick={() => filterPosts("all")} />
						{
							tags.map((tag, index) => (
								<Chip
									label={tag.node.blogTag.toUpperCase()}
									key={index}
									onClick={() => filterPosts(tag.node.blogTag)}
								/>
							))
						}
					</ChipContainer>
					{
						filteredPosts.length > 0 ?
							filteredPosts.map((post, i) => {
								const { title, subtitle, createdAt, image, slug } = post.node
								return (
									<BlogCardContainer key={i}>
										<Link to={`/blog/${slug}`}>
											<BlogCard title={title} subtitle={subtitle} createdAt={createdAt} image={image.fluid.src} />
										</Link>
									</BlogCardContainer>
								)
							})
							: <NoBlogsContainer alignItems="center" justifyContent="center" height="200px">
								<Typography color="rgba(0, 0, 0, .5)">NO BLOGS HERE :(</Typography>
							</NoBlogsContainer>
					}
				</Container>
			</BlogContainer>
			<Footer />
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
					tag
				}
			}
		}
		allContentfulBlogTags {
			edges {
				node {
					blogTag
				}
			}
		}
	}
`;