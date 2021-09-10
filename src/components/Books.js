import React from "react";
import Book from "./Book";
import "../App.css";
import PropTypes from "prop-types";

const Books = ({ books, loading }) => {
    if (loading) {
        return (
            <div className="text-center">
                <div
                    className="spinner-border text-primary"
                    role="status"
                    style={{
                        width: "80px",
                        height: "80px",
                        marginTop: "8%",
                        marginBottom: "7%",
                    }}
                >
                    <span className="sr-only"></span>
                </div>
            </div>
        );
    }
    return books.map((book) => (
        <div className="books" key={book.id}>
            <Book
                url={book.volumeInfo.imageLinks}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                publisher={book.volumeInfo.publisher}
                genre={book.volumeInfo.categories}
                pages={book.volumeInfo.pageCount}
                id={book.id}

                // height={book}
                // width={book}
                // thickness={book}
                
                publishedDate={book.volumeInfo.publishedDate}
                lang={book.volumeInfo.language}
                isbn={book.volumeInfo.industryIdentifiers}
                previewLink={book.volumeInfo.previewLink}

                description={book.volumeInfo.description}
            />
        </div>
    ));
};

Books.propTypes = {
    thumbnailUrl: PropTypes.node,
    title: PropTypes.string,
    id: PropTypes.string,
};

export default Books;
