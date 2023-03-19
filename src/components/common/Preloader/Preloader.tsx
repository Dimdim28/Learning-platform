import React from 'react';

import styles from './Preloader.module.scss';

const Preloader = () => {
  return (
    <div className={styles.wrapper} role="progressbar">
      <div className={styles.loader}></div>
    </div>
  );
};

export default Preloader;
