module.exports = {
  siteMetadata: {
    title: `File System Route API`,
  },
  plugins: [
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: "device",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/devices`,
        name: `devices`,
      },
    },
  ],
}
