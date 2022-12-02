import React from 'react';
import styles from './Statistic.module.css';
import {BegColor} from "./Color"

const Statistics = ({ data }) => {


  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Upload stats</h2>

      <ul className={styles.statList}>
        {data.map(({ id, label, percentage }, index) => (
          <li key={id} className={BegColor(styles, index)}>
            <span className={styles.label}>{label}</span>
            <span className={percentage}>{percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
