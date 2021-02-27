import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/76684471?s=460&u=dec69272b3c737f56722563a6b5889607ed2c900&v=4" alt="Elton Freitas"/>
            <div>
                <strong>Elton Freitas</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level { level }
                </p>
            </div>
        </div>
    );
}