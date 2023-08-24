/**
 * External dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies.
 */
import Header from '../Header';

import * as styles from './styles.module.scss';
import Footer from '../Footer';

const Layout = ({ children }) => {
    return (
        <>
            <div className={styles.layout}>
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
