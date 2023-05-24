import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectUserProfile,
  selectProfileLoading,
} from '../../redux/features/profileSelectors';
import { ReactComponent as HandIcon } from '../../assets/iconsCardProgress/Hand.svg';
import { ReactComponent as PlanetIcon } from '../../assets/iconsCardProgress/planet.svg';
import styles from './index.module.css';

const CardProgress = () => {
  const userProfile = useSelector(selectUserProfile);
  const isLoading = useSelector(selectProfileLoading);

  if (isLoading) {
    return <div className={styles.loader}>Loading...</div>;
  }

  return (
    <div className={styles.progressCard}>
      <div className={styles.greeting}>
        {`Hey, ${userProfile?.name}!`} <HandIcon />
      </div>
      <div className={styles.description}>
        Here’s complex overview of your progress
      </div>
      <div className={styles.levelProgress}>
        <div className={styles.planetWrapper}>
          <PlanetIcon className={styles.planet} />
          <p className={styles.levelNum}>
            {userProfile?.level} <span className={styles.level}>level</span>
          </p>
        </div>
      </div>
      <div className={styles.progressLabel}>
        {userProfile?.progress}% to reach next level
      </div>
    </div>
  );
};

export default CardProgress;
