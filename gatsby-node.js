const path = require('path');
const slash = require('slash');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log("Error with Contentful data", result.errors)
    }

    const postTemplate = path.resolve('./src/templates/blog.js')

    result.data.allContentfulPost.edges.forEach(post => {
      createPage({
        path: `/blog/${post.node.slug}`,
        component: slash(postTemplate),
        context: {
          slug: post.node.slug
        }
      })
    })
  }).catch(err => console.log("Error with Contentful data", {error}))
}