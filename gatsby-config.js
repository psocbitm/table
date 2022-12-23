/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `Strapi`,
        fieldName: `Strapi`,
        url: `https://strapi.dev.web3p.in/graphql`,
      },
    },
  ],
};
