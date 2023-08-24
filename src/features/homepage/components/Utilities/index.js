/**
 * External dependencies.
 */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/**
 * Internal dependencies.
 */
import './styles.scss';
import * as styles from './styles.module.scss';
import Utility from '@/features/homepage/components/Utility';
import useUtilities from '@/features/homepage/hooks/useUtilities';
import Shell from '@/features/global/components/Shell';

const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

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

    const renderSliderLayout = () => {
        return (
            <Slider className="utilities-slider" {...settings}>
                {utilities.map(utility => {
                    return (
                        <Utility key={utility.id} utility={utility} />
                    );
                })}
            </Slider>
        );
    };

    return (
        <div className={styles.utilitiesContainer}>
            <Shell>
                <div className={styles.utilitiesContainer__head}>
                    <h4>What I love</h4>
                </div>

                {utilities.length <= 3 ? renderBasicLayout() : renderSliderLayout()}
            </Shell>
        </div>
    );
};

export default Utilities;
