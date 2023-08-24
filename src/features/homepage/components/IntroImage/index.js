/**
 * External dependencies.
 */
import React from 'react';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

/**
 * Internal dependencies.
 */
import * as styles from './styles.module.scss';

const IntroImage = () => {
    const { image } = useStaticQuery(graphql`
        query GetHomepageIntroImage {
            image: file(relativePath: { eq: "intro/me.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }

    `);
    return (
        <Image className={styles.introImage} fluid={image.childImageSharp.fluid} alt="Intro image" />
    );
};

export default IntroImage;
