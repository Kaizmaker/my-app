module.exports = {
  siteMetadata: {
    title: 'React Design',
    description: 'React design with Figma',
    keywords: 'react desin,figma design,sketch design',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'ya9baa57h7dv',
        accessToken: 'QWxvBRRSRt0r3OGtCCUQ2bAehBGHryqblwq8OL4pFMg',
      },
    },
  ],
}
