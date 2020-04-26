import React from 'react';

import Layout from '../components/Layout/layout';
import SEO from '../components/seo';
import Logo from '../components/Logo';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Logo />
    </Layout>
);

export default IndexPage;
