module.exports = {
    siteMetadata: {
        title: `Kaloyan Yosifov`,
        description: `This is a site I built so you can get to know me better.`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                data: `@import "${__dirname}/src/styles/global.scss";`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-transformer-sharp`,
            options: {
                // The option defaults to true
                checkSupportedExtensions: false,
            },
        },
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `kaloyan-yosifov`,
                short_name: `Kyosifov`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Rubik`,
                        variants: [`400`, '500', `700`, '900'],
                    },
                ],
            },
        },
        'gatsby-transformer-remark',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content`,
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    'UA-143022869-1',
                ],
                gtagConfig: {
                    optimize_id: 'OPT_CONTAINER_ID',
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    head: false,
                    respectDNT: false,
                },
            },
        },
    ],
};
