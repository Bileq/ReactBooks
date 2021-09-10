import React from "react";
import "../../App.css";

const BookDesc = ({ description }) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div
                    className="col-12 col-md-7 mt-md-0 mt-5 text-start 
                text-md-justify text fs-6 pb-2"
                >
                    {description}
                </div>
            </div>
        </div>
    );
};

export default BookDesc;
