/**
 * External dependencies.
 */
import { graphql, useStaticQuery } from 'gatsby';

const useUtilities = () => {
    const { remarks: { utilities } } = useStaticQuery(graphql`
        query GetUtilities {
            remarks: allMarkdownRemark(filter: { frontmatter: { location: { eq: "homepage-utilities" } } }) {
                utilities: nodes {
                    id
                    frontmatter {
                        featuredImage {
                            publicURL,
                            childImageSharp {
                                fluid {
                                    src
                                }
                            }
                        }
                    }
                    html
                }
            }
        }

    `);

    return utilities || [];
};

export default useUtilities;
