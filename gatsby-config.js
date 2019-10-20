module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                auth: {
                    jwt_user: process.env.JWT_USER,
                    jwt_pass: process.env.JWT_PASSWORD,
                },
                // your WordPress source
                baseUrl: `dr-j-muskat-1beee9.easywp.com`,
                protocol: `https`,
                // is it hosted on wordpress.com, or self-hosted?
                hostingWPCOM: false,
                // does your site use the Advanced Custom Fields Plugin?
                useACF: false
            }
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-glamor`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
