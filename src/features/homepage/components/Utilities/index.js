/**
 * External dependencies.
 */
import React from 'react';

/**
 * Internal dependencies.
 */
import styles from './styles.module.scss';
import Utility from '@/features/homepage/components/Utility';
import useUtilities from '@/features/homepage/hooks/useUtilities';
import Shell from '@/features/global/components/Shell';

const Utilities = () => {
    const utilities = useUtilities();

    const renderBasicLayout = () => {
        return (
            <div className={styles.utilitiesBasic}>
                {utilities.map(utility => {
                    return (
                        <Utility key={utility.id} utility={utility} />
                    );
                })}
            </div>
        );
    };

    return (
        <div className={styles.utilitiesContainer}>
            <Shell>
                <div>

                </div>

                {renderBasicLayout()}
            </Shell>
        </div>
    );
};

export default Utilities;
