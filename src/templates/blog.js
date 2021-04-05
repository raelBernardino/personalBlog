import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useRecoilValue, useRecoilState } from 'recoil';

import { useWindowSize } from '../hooks'
import { dataAtom, isNavOpenAtom } from '../recoil/atoms'
import { Container, Nav, NavDrawer, NavBar, Footer } from '../components/atoms'
import { BlogHeader } from '../components/blog'
import { optionsTypography } from '../components/options'
import './style.css'

const PageContainer = styled(Container)`
  overflow: ${p => p.isNavOpen && "hidden"};
`;

const BlogTemplate = ({ data }) => {
  const {
    image,
    title,
    subtitle,
    author,
    createdAt,
    blogContent
  } = data.post
  const [, setCopiedData] = useRecoilState(dataAtom)
  const isNavOpen = useRecoilValue(isNavOpenAtom);
  const { width } = useWindowSize()
  const [screenWidth, setScreenWidth] = useState(null)
  useEffect(() => {
    setScreenWidth(screenWidth)
  }, [width])

  useEffect(() => {
    if (data) setCopiedData(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])
  return (
    <>
      { screenWidth > 749 ?
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
      <PageContainer padding="0" isNavOpen={isNavOpen}>
        <BlogHeader
          image={image}
          title={title}
          subtitle={subtitle}
          author={author}
          createdAt={createdAt}
        />
        <Container padding={screenWidth > 749 && "50px 25%"}>
          {
            documentToReactComponents(blogContent.json, optionsTypography)
          }
        </Container>
        <Footer />
      </PageContainer>
    </>
  )
}

export default BlogTemplate;

export const blogTemplateQuery = graphql`
query($slug: String!) {
  post: contentfulPost(slug: { eq: $slug }) {
    title
    subtitle
    author
    createdAt(formatString: "MMMM Do, YYYY")
    blogContent {
      json
    }
    image {
      fluid(quality: 100) {
        src
      }
    }
  }
}
`