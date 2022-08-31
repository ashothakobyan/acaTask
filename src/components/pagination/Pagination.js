import React from "react";
import styles from "./Pagination.module.css";

function Pagination({ usersPerPage, totalUsers, currentPage, paginate }) {
  const pageNumbers = () => {
    let pageNumbersArr = [];
    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
      pageNumbersArr.push(i);
    }
    return pageNumbersArr;
  };

  return (
    <div className={styles.pagination}>
      {pageNumbers().map((number) => {
        return (
          <div
            className={`${styles.number} ${
              currentPage === number ? styles.active : ""
            }`}
            key={number}
            onClick={currentPage !== number ? () => paginate(number) : null}
          >
            {number}
          </div>
        );
      })}
    </div>
  );
}

export default Pagination;
