import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container } from '../components/atoms'
import { BlogHeader } from '../components/blog'
import { optionsTypography } from '../components/options'
import './style.css'

const BlogTemplate = ({ data }) => {
  console.log({ data });
  const {
    image,
    title,
    subtitle,
    author,
    createdAt,
    blogContent
  } = data.post
  return (
    <Container padding="0">
      <BlogHeader
        image={image}
        title={title}
        subtitle={subtitle}
        author={author}
        createdAt={createdAt}
      />
      <Container>
        {
          documentToReactComponents(blogContent.json, optionsTypography)
        }
      </Container>
    </Container>
  )
}

export default BlogTemplate;

export const blogTemplateQuery = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: {eq: $slug}) {
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