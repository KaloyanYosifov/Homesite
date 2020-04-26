/**
 * External dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies.
 */
import styles from './styles.module.scss';
import Shell from '@/features/global/components/Shell';

const Hero = ({ children, sidebar }) => {
    return (
        <div className={styles.hero}>
            <Shell>
                <div className={styles.hero__content}>
                    {children}
                </div>

                {
                    sidebar && (
                        <div className={styles.hero__sidebar}>
                            {sidebar}
                        </div>
                    )
                }
            </Shell>
        </div>
    );
};

Hero.propTypes = {
    children: PropTypes.node.isRequired,
    sidebar: PropTypes.node,
};

export default Hero;
