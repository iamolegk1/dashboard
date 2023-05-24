import React from 'react';

import Sidebar from '../Sidebar';
import Header from '../Header';
import CardProgress from '../CardProgress';
import CompletionProgressPlanet from '../CompletionProgressPlanet';
import ProgressBlockGroup from '../ProgressBlockGroup';
import AdditionsList from '../AdditionsList';
import styles from './index.module.css';

const DashboardLayout = () => (
  <div className={styles.dashboardLayout}>
    <Sidebar />
    <div className={styles.contentWrapper}>
      <Header />
      <div className={styles.content}>
        <div className={styles.cardBlockWrapper}>
          <CardProgress />
          <div className={styles.progressWrapper}>
            <CompletionProgressPlanet />
            <ProgressBlockGroup />
          </div>
        </div>
        <div className={styles.AdditionsWrapper}>
          <AdditionsList />
        </div>
      </div>
    </div>
  </div>
);

export default DashboardLayout;
