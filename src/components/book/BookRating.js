import React from "react";
import "../../App.css";

const BookRating = ({ averageRating, ratingsCount }) => {
    return (
        <div className="container pt-5">
            <div className="row justify-content-center">
                <div className="col col-md-4 text-truncate fw-bold pb-3">
                    Average:
                </div>
                <div className="col col-md-8">{averageRating}</div>
            </div>
            <div className="row justify-content-center">
                <div className="col col-md-4 text-truncate fw-bold pb-3">
                    Ratings:
                </div>
                <div className="col col-md-8">{ratingsCount}</div>
            </div>
        </div>
    );
};

export default BookRating;
