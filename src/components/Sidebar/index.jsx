import React from 'react';

import { PAGES } from './constants';
import { ReactComponent as SignOutIcon } from '../../assets/iconsSidebar/exit.svg';
import { ReactComponent as LogoIcon } from '../../assets/iconsSidebar/logo.svg';
import styles from './index.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <LogoIcon />
      </div>
      <div className={styles.sidebarMenu}>
        <div className={styles.sidebarLinks}>
          {PAGES.map((page) => (
            <a
              href='#'
              className={`${styles.linkItem} ${styles.linkItemHover}`}
              key={page.id}
            >
              <span className={styles.svgIcon}>{page.icon}</span>
              <span>{page.title}</span>
            </a>
          ))}
        </div>
        <div className={styles.signOut}>
          <SignOutIcon />
          <span>Sign Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
