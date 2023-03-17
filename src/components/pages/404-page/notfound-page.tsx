import React from 'react';
import Link from 'next/link';

import styles from './notfound-page.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Page not found</h1>
      <Link className={styles.button} href="/">
        Back home
      </Link>
    </div>
  );
};

export default NotFoundPage;
