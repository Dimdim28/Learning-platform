import React, { useCallback } from 'react';

import styles from './Pagination.module.scss';

interface PaginationProps {
  currentPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setPage,
  totalPages,
}) => {
  const changePage = useCallback(
    (num: number) => {
      if (num !== currentPage && num > 0 && num <= totalPages) setPage(num);
    },
    [setPage, totalPages, currentPage],
  );

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if ([1, totalPages].includes(i) || Math.abs(i - totalPages) < 3) {
      pages.push(i);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttons}>
        <div
          className={styles.button}
          onClick={() => {
            changePage(currentPage - 1);
          }}
        >
          {'<'}
        </div>
        {pages.map((number, id) => (
          <div
            key={id}
            className={
              number === currentPage ? styles.activeButton : styles.button
            }
            onClick={() => {
              changePage(number);
            }}
          >
            {number}
          </div>
        ))}
        <div
          className={styles.button}
          onClick={() => {
            changePage(currentPage + 1);
          }}
        >
          {'>'}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
