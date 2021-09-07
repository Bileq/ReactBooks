import React from "react";
import "../App.css";

const Pagination = ({ booksPerPage, totalBooks, paginate, currentPage }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pageNumbers.push(i);
    }

    // const paginationRangeStart = () => {
    //     return currentPage - 3 < pageNumbers[0] 
    //     ? currentPage
    //     : currentPage - 3
    // }
    
    // const paginationRangeEnd = currentPage + 3

    return (
        <nav>
            <ul className="pagination justify-content-center pagination-md m-0">
                {/* Previous button */}
                <li className="page-item arrows">
                    <a
                        onClick={() => paginate(currentPage - 1)}
                        href
                        className="page-link border-0"
                        aria-label="Previous"
                        style={{ background: "#393E46" }}
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {pageNumbers.map((number) => {
                    {/* if(number > 3 && number < 8 ) { */}

                    return <li key={number} className="page-item">
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
                {/* } else {
                    return null
                } */}
                })}
                {/* Next button */}
                <li className="page-item arrows">
                    <a
                        onClick={() => paginate(currentPage + 1)}
                        href
                        className="page-link border-0"
                        aria-label="Next"
                        style={{ background: "#393E46" }}
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
