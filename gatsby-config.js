module.exports = {
    siteMetadata: {
      title: "Matt Meinzer",
      author: "Matt Meinzer",
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/pages`,
          name: "pages",
        },
      },
      {
        resolve: "gatsby-plugin-typography",
        options: {
          pathToConfigModule: "src/utils/typography",
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 590,
              },
            },
            {
              resolve: `gatsby-remark-responsive-iframe`,
              options: {
                wrapperStyle: `margin-bottom: 1.0725rem`,
              },
            },
            "gatsby-remark-prismjs",
            "gatsby-remark-copy-linked-files",
            "gatsby-remark-smartypants",
          ],
        },
      },
    ],
}
  