/**
 * External dependencies.
 */
import React from 'react';

/**
 * Internal dependencies.
 */
import Shell from '@/features/global/components/Shell';

import styles from './styles.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Shell>
                <h3>Check me out on</h3>
            </Shell>
        </footer>
    );
};

export default Footer;
