import React from 'react';

import styles from './index.module.css';

const ProgressBlock = ({ icon, progress, text }) => {
  const [completed, total] = progress.split('/');

  return (
    <div className={styles.block}>
      <span className={styles.icon}>{icon}</span>
      <div className={styles.progress}>
        <div className={styles.textWrapper}>
          <span className={styles.completed}>{completed}</span>
          <span className={styles.separator}>/</span>
          <span className={styles.total}>{total}</span>
        </div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default ProgressBlock;
