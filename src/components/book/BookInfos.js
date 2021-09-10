import React from "react";
import "../../App.css";

const BookInfos = ({ title, author, publisher, genre, pages }) => {
    return (
        <div className="container">
            <div className="row pt-2">
                <div className="col-4 pb-3 fw-bold">Title:</div>
                <div className="col-8">{title}</div>
            </div>
            <div className="row">
                <div className="col-4 pb-3 fw-bold">Author:</div>
                <div className="col-8">{author}</div>
            </div>
            <div className="row">
                <div className="col-4 pb-3 fw-bold">Publisher:</div>
                <div className="col-8">{publisher}</div>
            </div>
            <div className="row">
                <div className="col-4 pb-3 fw-bold">Genre:</div>
                <div className="col-8">{genre}</div>
            </div>
            <div className="row">
                <div className="col-4 pb-3 fw-bold">Pages:</div>
                <div className="col-8">{pages}</div>
            </div>
        </div>
    );
};

export default BookInfos;
