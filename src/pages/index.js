/**
 * External dependencies.
 */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

/**
 * Internal dependencies.
 */
import styles from '@/page-styles/homepage.module.scss';
import Seo from '@/features/global/components/Seo';
import Layout from '@/features/global/components/Layout';
import Hero from '@/features/global/components/Hero';

const IndexPage = () => {
    const { homepageIntro } = useStaticQuery(graphql`
        query getHomepageIntro {
            homepageIntro: markdownRemark(frontmatter: { location: { eq: "homepage-intro" } }) {
                html
            }
        }
    `);

    return (
        <Layout>
            <Seo title="Home" />
            <Hero>
                <div className={styles.homepageIntro} dangerouslySetInnerHTML={{ __html: homepageIntro.html }}>
                </div>
            </Hero>
        </Layout>
    );
};

export default IndexPage;
