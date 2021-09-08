import React from "react";
import "../App.css";

const Pagination = ({ booksPerPage, totalBooks, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginationRangeStart = (currentPage) =>
        currentPage >= pageNumbers.length - 3
            ? currentPage - 3 - (currentPage - (pageNumbers.length - 3))
            : currentPage - 3;

    const paginationRangeEnd = (currentPage) =>
        currentPage < 3
            ? currentPage +
              3 +
              (3 - (pageNumbers.length - (pageNumbers.length - currentPage)))
            : currentPage + 3;

    return (
        <nav>
            <ul className="pagination justify-content-center mt-5 pb-5 mb-0">
                {/* Previous button */}
                <li className="page-item arrows">
                    <a
                        onClick={() => paginate(currentPage - 1)}
                        href
                        className="page-link btn border-0"
                        aria-label="Previous"
                        style={{ background: "#393E46" }}
                    >
                        <span aria-hidden="true">Previous</span>
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
                        onClick={() => paginate(currentPage + 1)}
                        href
                        className="page-link btn border-0"
                        aria-label="Next"
                        style={{ background: "#393E46" }}
                    >
                        <span aria-hidden="true">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
