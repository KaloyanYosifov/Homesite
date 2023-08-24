/**
 * External dependencies.
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

/**
 * Internal dependencies.
 */
import * as styles from './styles.module.scss';

const socials = [
    {
        url: 'https://www.linkedin.com/in/kyosifov-',
        icon: faLinkedin,
    },
    {
        url: 'https://github.com/KaloyanYosifov',
        icon: faGithub,
    },
];

const Socials = () => (
    <ul className={styles.socials}>
        {socials.map(social => (
            <li key={social.url}>
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon color="#fff" icon={social.icon} size="lg" />
                </a>
            </li>
        ))}
    </ul>
);

export default Socials;
