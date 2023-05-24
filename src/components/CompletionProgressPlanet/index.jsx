import React from 'react';
import { useSelector } from 'react-redux';

import { selectUserProfile } from '../../redux/features/profileSelectors';
import { ReactComponent as PlanetsIcon } from '../../assets/iconsCompletionProgress/planets.svg';
import { ReactComponent as AstronautIcon } from '../../assets/iconsCompletionProgress/astronaut.svg';
import backgroundImg from '../../assets/imagesCompletionProgress/bg.jpg';
import styles from './index.module.css';

const CompletionProgressPlanet = () => {
  const userProfile = useSelector(selectUserProfile);

  return (
    <div
      className={styles.completionProgress}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className={styles.planetsWrapper}>
        <PlanetsIcon className={styles.planets} />
        <div className={styles.astronautWrapper}>
          <AstronautIcon className={styles.astronaut} />
        </div>
      </div>
      {userProfile && (
        <div className={styles.completed}>
          {userProfile.coursesCompleted}% Completed
        </div>
      )}
    </div>
  );
};

export default CompletionProgressPlanet;
