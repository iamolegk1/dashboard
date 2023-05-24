import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectUserProfile,
  selectProfileLoading,
} from '../../redux/features/profileSelectors';
import { ReactComponent as SearchIcon } from '../../assets/iconsHeader/search.svg';
import { ReactComponent as NotificationIcon } from '../../assets/iconsHeader/notification.svg';
import { ReactComponent as OnlineIcon } from '../../assets/iconsHeader/online.svg';
import { ReactComponent as ProfileIcon } from '../../assets/iconsHeader/profile.svg';
import styles from './index.module.css';

const Header = () => {
  const userProfile = useSelector(selectUserProfile);
  const isLoading = useSelector(selectProfileLoading);

  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <input type='text' placeholder='Search' />
        <div className={styles.searchIcon}>
          <SearchIcon />
        </div>
      </div>
      <div className={styles.options}>
        <div className={styles.langNotify}>
          <div className={styles.languageSelect}>
            <select>
              <option value='en'>EN</option>
              <option value='ua'>UA</option>
            </select>
          </div>
          <div className={styles.notify}>
            <NotificationIcon />
          </div>
        </div>
        {isLoading ? (
          <div className={styles.loader}>Loading...</div>
        ) : (
          <div className={styles.profile}>
            <div className={styles.profileDetails}>
              <div className={styles.name}>{userProfile?.name}</div>
              <div className={styles.specialty}>{userProfile?.position}</div>
            </div>
            <div className={styles.profileWrapper}>
              <ProfileIcon />
              <span className={styles.online}>
                <OnlineIcon />
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
