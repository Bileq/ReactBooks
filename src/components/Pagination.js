import React from "react";
import "../App.css";

const Pagination = ({ booksPerPage, totalBooks, paginate, currentPage }) => {
    const pageNumbers = [];
    const range = 6;

    for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pageNumbers.push(i);
    }

    const pages = pageNumbers.length;

    const paginationRangeStart = (currentPage) =>
        currentPage >= pages - range / 2
            ? pages - range
            : currentPage - range / 2;


    const paginationRangeEnd = (currentPage) =>
        currentPage < range / 2
            ? range
            : currentPage + range / 2;

    return (
        <nav>
            <ul className="pagination justify-content-center mt-5 pb-5 mb-0">
                {/* First button */}
                <li className="page-item arrows">
                    <a
                        onClick={() => paginate(1)}
                        href
                        className="page-link btn border-0"
                        aria-label="first"
                        style={{ background: "#393E46" }}
                    >
                        <span aria-hidden="true">First</span>
                    </a>
                </li>
                {/* Previous button */}
                <li className="page-item arrows">
                    <a
                        onClick={() =>
                            currentPage === 1
                                ? paginate(1)
                                : paginate(currentPage - 1)
                        }
                        href
                        className="page-link btn border-0"
                        aria-label="Previous"
                        style={{ background: "#393E46" }}
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {pageNumbers.map((number) => {
                    if ( 
                        number > paginationRangeStart(currentPage) && 
                        number < paginationRangeEnd(currentPage) 
                    ) {
                        return (
                            <li key={number} className="page-item">
                                <a
                                    onClick={() => {
                                        paginate(number);
                                    }}
                                    href
                                    className="page-link btn border-0"
                                    style={{
                                        background:
                                            number === currentPage
                                                ? "#0DCAF0"
                                                : "#393E46",
                                    }}
                                >
                                    {number}
                                </a>
                            </li>
                        );
                    } else {
                        return null;
                    }
                })}
                {/* Next button */}
                <li className="page-item arrows">
                    <a
                        onClick={() =>
                            currentPage === pageNumbers.length
                                ? paginate(currentPage)
                                : paginate(currentPage + 1)
                        }
                        href
                        className="page-link btn border-0"
                        aria-label="Next"
                        style={{ background: "#393E46" }}
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
                {/* Last button */}
                <li className="page-item arrows">
                    <a
                        onClick={() => paginate(pageNumbers.length)}
                        href
                        className="page-link btn border-0"
                        aria-label="last"
                        style={{ background: "#393E46" }}
                    >
                        <span aria-hidden="true">Last</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
