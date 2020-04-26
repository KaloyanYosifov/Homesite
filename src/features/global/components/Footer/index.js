/**
 * External dependencies.
 */
import React from 'react';

/**
 * Internal dependencies.
 */
import Shell from '@/features/global/components/Shell';

import styles from './styles.module.scss';
import Socials from '@/features/global/components/Socials';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Shell>
                <h5>Check me out on</h5>
                <Socials />
            </Shell>
        </footer>
    );
};

export default Footer;
