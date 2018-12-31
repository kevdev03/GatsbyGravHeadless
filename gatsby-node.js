/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/product.js`)

  return graphql(`
    {
      allSnipcartProduct {
        edges {
          node {
            path
            userDefinedId
            name
            price
            title
            image
            description
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    // console.log('result.data.allSnipcartProduct.edges-->', result.data.allSnipcartProduct.edges);

    result.data.allSnipcartProduct.edges.forEach(({ node }) => {
      // console.log('node-->', node)
      createPage({
        path: node.path,
        component: productTemplate,
        context: {},
      })
    })
  })
}
