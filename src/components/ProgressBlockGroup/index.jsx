import React from 'react';
import { useSelector } from 'react-redux';

import { selectUserProfile } from '../../redux/features/profileSelectors';
import ProgressBlock from '../BlockProgress';
import { ReactComponent as CoursesIcon } from '../../assets/iconsBlockProgress/courses.svg';
import { ReactComponent as FolderIcon } from '../../assets/iconsBlockProgress/folder.svg';
import { ReactComponent as UsersGuidelineIcon } from '../../assets/iconsBlockProgress/usersGuideline.svg';
import styles from './index.module.css';

const ProgressBlockGroup = () => {
  const userProfile = useSelector(selectUserProfile);
  let blocksData = [];

  if (userProfile) {
    blocksData = [
      {
        icon: <CoursesIcon />,
        progress: `${userProfile.completedCourses}/${userProfile.totalCourses}`,
        text: 'Courses completed',
      },
      {
        icon: <FolderIcon />,
        progress: `${userProfile.foldersAdded}/${userProfile.totalFolders}`,
        text: 'Folders add',
      },
      {
        icon: <UsersGuidelineIcon />,
        progress: `${userProfile.booksRead}/${userProfile.totalBooks}`,
        text: 'Books read',
      },
    ];
  }

  return (
    <div className={styles.blocksGroup}>
      {blocksData.map((block, index) => (
        <ProgressBlock
          key={index}
          icon={block.icon}
          progress={block.progress}
          text={block.text}
        />
      ))}
    </div>
  );
};

export default ProgressBlockGroup;
