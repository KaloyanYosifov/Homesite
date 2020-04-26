/**
 * External dependencies.
 */
import React from 'react';

/**
 * Internal dependencies.
 */
import Seo from '@/features/global/components/Seo';
import Layout from '@/features/global/components/Layout';
import Intro from '@/features/homepage/components/Intro';

const IndexPage = () => {

    return (
        <Layout>
            <Seo title="Home" />
            <Intro />
        </Layout>
    );
};

export default IndexPage;
