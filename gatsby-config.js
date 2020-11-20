require('dotenv').config({
  path: `.env`
})

const { BLOCKS, MARKS, INLINES } = require('@contentful/rich-text-types');

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Roboto`,
              variants: ["100", "300", "400", "500", "700", "900"]
            }
          ]
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN
      }
    },
    // {
    //   resolve: '@contentful/gatsby-transformer-contentful-richtext',
    //   options: {
    //     renderOptions: {
    //       /*
    //        * Defines custom html string for each node type like heading, embedded entries etc..
    //        */
    //       renderNode: {
    //         // Example
    //         [INLINES.ASSET_HYPERLINK]: node => {
    //           return `<img class='custom-asset' src="${node.data.target.fields.file['en-US'].url
    //             }"/>`
    //         },
    //         [INLINES.EMBEDDED_ENTRY]: node => {
    //           return `<div class='custom-entry' />${node.data.target.fields.name['en-US']
    //             }</div>`
    //         },
    //       },
    //       /*
    //        * Defines custom html string for each mark type like bold, italic etc..
    //        */
    //       renderMark: {
    //         // Example
    //         [MARKS.BOLD]: text => `<custom-bold>${text}<custom-bold>`,
    //       },
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
