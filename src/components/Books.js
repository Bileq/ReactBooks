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
                id={book.id}
                img={book.thumbnailUrl}
                title={book.title}
                albumId={book.albumId}
                url={book.url}
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
