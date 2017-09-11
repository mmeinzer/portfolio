module.exports = {
    siteMetadata: {
      title: "Matt Meinzer's Blog",
      author: "Matt Meinzer",
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: "gatsby-plugin-typography",
        options: {
          pathToConfigModule: "src/utils/typography",
        },
      },
    ],
}
  