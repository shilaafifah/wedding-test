/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [   {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `static`,
      path: `${__dirname}/static/`, // Path to your static directory
    },
  },],
}
