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
                title={book.volumeInfo.title ?? <hr style={{width: '40%'}}></hr>}
                author={book.volumeInfo.authors ?? <hr style={{width: '40%'}}></hr>}
                publisher={book.volumeInfo.publisher ?? <hr style={{width: '40%'}}></hr>}
                genre={book.volumeInfo.categories ?? <hr style={{width: '40%'}}></hr>}
                pages={book.volumeInfo.pageCount ?? <hr style={{width: '40%'}}></hr>}
                id={book.id}
                publishedDate={book.volumeInfo.publishedDate ?? <hr style={{width: '40%'}}></hr>}
                lang={book.volumeInfo.language ?? <hr style={{width: '40%'}}></hr>}
                isbn={book.volumeInfo.industryIdentifiers}
                previewLink={book.volumeInfo.previewLink ?? <hr style={{width: '40%'}}></hr>}
                description={book.volumeInfo.description ?? "Description not found"}
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
