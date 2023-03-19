import React from 'react';
import Link from 'next/link';

import styles from './Error.module.scss';

interface ErrorProps {
  text: string;
}
const Error: React.FC<ErrorProps> = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{text}</h1>
      <Link className={styles.button} href="/">
        Go home
      </Link>
    </div>
  );
};

export default Error;
