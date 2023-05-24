import React from 'react';

import { ADDITIONS_DATA } from './constants';
import Addition from '../Addition';

import styles from './index.module.css';

const AdditionsList = () => (
  <div className={styles.additionsList}>
    {ADDITIONS_DATA.map((data) => (
      <Addition
        key={data.id}
        title={data.title}
        coursesCounter={data.coursesCounter}
        userCounter={data.userCounter}
        amount={data.amount}
      />
    ))}
  </div>
);

export default AdditionsList;
