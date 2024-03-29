/**
 * External dependencies.
 */
import React from 'react';

/**
 * Internal dependencies.
 */
import Logo from '../Logo';

import * as styles from './styles.module.scss';

const Header = () => (
    <div className={styles.header}>
        <Logo />
    </div>
);

export default Header;
