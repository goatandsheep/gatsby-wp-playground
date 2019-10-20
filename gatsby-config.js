module.exports = {
    siteMetadata: {
        title: "Gatsby Default Starter",
    },
    plugins: [
        {
            resolve: "gatsby-plugin-react-helmet",
            options: {
                // your WordPress source
                baseUrl: `dr-j-muskat-1beee9.easywp.com`,
                protocol: `https`,
                // is it hosted on wordpress.com, or self-hosted?
                hostingWPCOM: false,
                // does your site use the Advanced Custom Fields Plugin?
                useACF: false
            }
        }
    ]
}