import React, { useState } from 'react';
import { usePagination, DOTS } from '../../../hooks';
import './style.css';
const Pagination = (props) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    // console.log(lastPage);
    return (
        <ul
            className='pagination-container'
            onClick={() => window.scrollTo(0, 0)}
        >
            {currentPage > 1 ? (
                <li
                    className='pagination-item'
                    onClick={onPrevious}
                >
                    <i className="fa-regular fa-arrow-left-long"></i>
                </li>
            ) : (null)
            }
            {paginationRange.map((pageNumber) => {
                if (pageNumber === DOTS) {
                    return <li className="pagination-item dots">&#8230;</li>;
                }

                return (
                    <li
                        className={`pagination-item ${currentPage === pageNumber ? 'active' : ''}`}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            {
                lastPage === currentPage ? (
                    null
                ) : (
                    <li
                        className='pagination-item'

                        onClick={onNext}
                    >
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </li>
                )
            }

        </ul>
    );
};

export default Pagination;