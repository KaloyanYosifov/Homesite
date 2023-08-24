/**
 * External dependencies.
 */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

/**
 * Internal dependencies.
 */
import * as styles from './styles.module.scss';
import Hero from '@/features/global/components/Hero';
import IntroImage from '@/features/homepage/components/IntroImage';

const Intro = () => {
    const { homepageIntro } = useStaticQuery(graphql`
        query getHomepageIntro {
            homepageIntro: markdownRemark(frontmatter: { location: { eq: "homepage-intro" } }) {
                html
            }
        }
    `);

    return (
        <Hero sidebar={<IntroImage />}>
            <div className={styles.homepageIntro} dangerouslySetInnerHTML={{ __html: homepageIntro.html }}>
            </div>
        </Hero>
    );
};

export default Intro;
