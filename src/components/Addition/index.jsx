import React from 'react';

import { ReactComponent as CoursesIcon } from '../../assets/iconsAddition/courses.svg';
import { ReactComponent as PlusIcon } from '../../assets/iconsAddition/plus.svg';
import { ReactComponent as UserIcon } from '../../assets/iconsAddition/user.svg';
import { ReactComponent as Dots } from '../../assets/iconsAddition/threeDots.svg';
import picture1 from '../../assets/imagesAddition/picture1.png';
import picture2 from '../../assets/imagesAddition/picture2.png';
import picture3 from '../../assets/imagesAddition/picture3.png';

import styles from './index.module.css';

const Addition = ({ title, coursesCounter, userCounter, amount }) => (
  <div className={styles.addition}>
    <div className={styles.titleContainer}>
      <span className={styles.iconTitleWrapper}>
        <PlusIcon />
        <span className={styles.title}>{title}</span>
      </span>
      <Dots />
    </div>
    <div className={styles.infoContainer}>
      <div className={styles.coursesCounter}>
        <span>
          <CoursesIcon />
        </span>
        <span className={styles.counter}>{coursesCounter}</span>
      </div>
      <div className={styles.userCounter}>
        <span>
          <UserIcon />
        </span>
        <span>{userCounter}</span>
      </div>
    </div>
    <div className={styles.galleryContainer}>
      <img src={picture1} alt='picture1' />
      <img src={picture2} alt='picture2' />
      <div className={styles.pictureWrapper}>
        <img src={picture3} alt='picture3' />
        <span className={styles.amount}>{amount}</span>
      </div>
    </div>
  </div>
);

export default Addition;
