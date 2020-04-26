/**
 * External dependencies.
 */
import React from 'react';

/**
 * Internal dependencies.
 */
import Seo from '../features/global/Seo';
import Layout from '../features/global/Layout';

const NotFoundPage = () => (
    <Layout>
        <Seo title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
);

export default NotFoundPage;
