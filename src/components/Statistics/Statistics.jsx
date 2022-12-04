import React from 'react';
import styles from './Statistic.module.css';
import { BegColor } from './Color';
import PropTypes from 'prop-types';

const Statistics = ({ data, title}) => {
  return (
    <section className={styles.section}>

      {title ? <h2 className={styles.title}>{title}</h2>: ""}
      

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

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
export default Statistics;
