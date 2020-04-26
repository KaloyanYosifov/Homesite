/**
 * External dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies.
 */
import styles from './styles.module.scss';

const Utility = ({ utility }) => {
    return (
        <div className={styles.utility}>
            <div className={styles.utility__head} style={{ backgroundImage: `url(${utility.frontmatter.featuredImage.publicURL})` }}>
            </div>

            <div className={styles.utility__body} dangerouslySetInnerHTML={{ __html: utility.html }}>
            </div>
        </div>
    );
};

Utility.propTypes = {
    utility: PropTypes.isRequired,
};

export default Utility;
