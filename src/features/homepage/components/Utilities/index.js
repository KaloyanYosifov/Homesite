/**
 * External dependencies.
 */
import React from 'react';

/**
 * Internal dependencies.
 */
import useUtilities from '@/features/homepage/hooks/useUtilities';
import Utility from '@/features/homepage/components/Utility';

const Utilities = () => {
    const utilities = useUtilities();

    const renderBasicLayout = () => {
        return (
            <div>
                {utilities.map(utility => {
                    return (
                        <Utility key={utility.id} utility={utility} />
                    );
                })}
            </div>
        );
    };

    return renderBasicLayout();
};

export default Utilities;
