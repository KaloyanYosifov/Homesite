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

const Hero = ({ children, title, sidebar }) => {
    return (
        <div className={styles.hero}>
            <Shell>
                <div className={styles.hero__content}>
                    {title && <h2>{title}</h2>}

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
    title: PropTypes.string,
};

export default Hero;
