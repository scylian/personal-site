module.exports = {
  siteMetadata: {
    title: "Bien Nguyen",
    author: "Bien Nguyen",
    description: "Personal website and professional portfolio for Front-end Developer, Bien Nguyen"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        autoLabel: process.env.NODE_ENV !== 'production',
        labelFormat: '[filename]--[local]',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/site-logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'gallery',
        path: `${__dirname}/gallery`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 820,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          'gatsby-remark-responsive-iframe',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-lodash',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
