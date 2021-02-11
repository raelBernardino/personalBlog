import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby'
import styled from 'styled-components';
import { Nav, NavDrawer, NavBar, Typography, Container, Chip, Footer } from '../components/atoms'
import { BlogCard, BlogBanner } from '../components/blog'
import { useWindowSize } from '../hooks'

const BlogLink = styled(Link)`
`;

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
	max-height: 600px;
	overflow-y: auto;
  @media screen and (min-width: 750px) {
    align-items: center;
  }
`;

const BlogContainer = styled(Container)`
	min-height: 100vh;
  @media screen and (min-width: 750px) {
    padding: 100px 50px 20px 50px;
  }
`;

const NoBlogsContainer = styled(Container)`
	margin-top: 80px;
`;

export default ({ data }) => {
  const [filteredPosts, setFilteredPosts] = useState([])
  const [currentTag, setCurrentTag] = useState("all")
  const posts = data.allContentfulPost.edges
  const bannerImage = posts[0].node.image.fluid.src
  const tags = data.allContentfulBlogTags.edges
  const { width } = useWindowSize()
  useEffect(() => {
    data && setFilteredPosts(posts)
  }, [data])

  const filterPosts = (tag) => {
    let tempFilteredPost = posts
    if (tag === "all") {
      setFilteredPosts(tempFilteredPost)
      setCurrentTag("all")
    }
    else {
      setFilteredPosts(tempFilteredPost.filter(post => post.node.tag === tag))
      setCurrentTag(tag)
    }
  }

  return (
    <>
      { width > 749 ?
        <NavBar />
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
      <BlogContainer>
        {width < 750 && <Typography color="black" size="xl" weight="900" padding="0 0 20px 0">BLOGS</Typography>}
        <BlogBanner url={bannerImage} posts={posts}>
        </BlogBanner>
        <Container padding={width > 749 && "0 50px 0 50px"} minHeight="80px">
          <ChipContainer>
            <Chip label="ALL" onClick={() => filterPosts("all")} isSelected={"all" === currentTag ? true : false} />
            {
              tags.map((tag, index) => (
                <Chip
                  label={tag.node.blogTag.toUpperCase()}
                  key={index}
                  onClick={() => filterPosts(tag.node.blogTag)}
                  isSelected={tag.node.blogTag === currentTag ? true : false}
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
                    <BlogLink to={`/blog/${slug}`}>
                      <BlogCard title={title} subtitle={subtitle} createdAt={createdAt} image={image.fluid.src} />
                    </BlogLink>
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
					isSelected
				}
			}
		}
	}
`;