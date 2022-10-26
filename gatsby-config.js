module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "DrupalGraqhQL",
        // This is field under which it's accessible
        fieldName: "Drupal",
        // Url to query from
        // url: "http://kecatalog.dev.wwbtc.com/graphql",
        //  url: `http://10.89.0.11/graphql`,
        // url: `https://api.keeneland.com/graphql`,
        // url: "http://10.89.0.24/graphql",
        url: `https://csc496f22demo.tldr.dev/graphql`,
      },
    },
  ],
};