const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: 'audicore',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFULL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFULL_SPACEID,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
