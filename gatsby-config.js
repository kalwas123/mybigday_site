module.exports = {
  siteMetadata: {
    title: `My Big Day - Dekoracje i kwiaty - śluby, eventy, sesje zdjęciowe`,
    description: `MyBigDay - dekoracje ślubne, scenografie do eventów i sesji zdjęciowych, wypożyczalnia artykułów dekoracyjnych.`,
    url: `https://www.mybigday.pl`,
    image: "/images/cover.jpg", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-root-import",
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Cirka-Regular"],
          urls: [`/fonts/fonts.css`],
        },
        google: {
          families: [`Fira Sans:300,400`],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        contentTypes: ["onas-team", "wedding", "offer", "contact-people"],
        singleTypes: [
          "Home",
          "about",
          "footer",
          "link-Brief",
          "page-Contact",
          "page-Portfolio",
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My Big Day `,
        short_name: `My Big Day `,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/assets/svg/Mybigday_favicon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
