/**
 * External dependencies.
 */
import React from 'react';

/**
 * Internal dependencies.
 */

import styles from './styles.module.scss';

const Shell = ({ children }) => (
    <div className={styles.shell}>{children}</div>
);

Shell.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Shell;
