/**
 * External dependencies.
 */
import React from 'react';

/**
 * Internal dependencies.
 */
import * as styles from './styles.module.scss';

const Logo = () => {
    return (
        <a href="#" className={styles.logo} style={{ backgroundImage: 'url(/images/logo.svg)' }}>
        </a>
    );
};

export default Logo;
