/**
 * External dependencies.
 */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

/**
 * Internal dependencies.
 */
import Seo from '@/features/global/components/Seo';
import Layout from '@/features/global/components/Layout';
import Hero from '@/features/global/components/Hero';

const IndexPage = () => {
    const { homepageIntro } = useStaticQuery(graphql`
        query getHomepageIntro {
            homepageIntro: markdownRemark(frontmatter: { location: { eq: "homepage-intro" } }) {
                frontmatter {
                    title
                }
                html
            }
        }
    `);

    return (
        <Layout>
            <Seo title="Home" />
            <Hero title={homepageIntro.frontmatter.title}>
                <div dangerouslySetInnerHTML={{ __html: homepageIntro.html }}>

                </div>
            </Hero>
        </Layout>
    );
};

export default IndexPage;
