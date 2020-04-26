/**
 * External dependencies.
 */
import React from 'react';

/**
 * Internal dependencies.
 */
import styles from './styles.module.scss';

const Logo = () => {
    return (
        <div className={styles.logo} style={{ backgroundImage: 'url(/images/logo.svg)' }}>
        </div>
    );
};

export default Logo;
