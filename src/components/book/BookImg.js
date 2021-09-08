import React from "react";
import "../../App.css";

const BookImg = ({ img, title }) => {
    return (
        <img
            src={img}
            alt={title}
            width={128}
            height={192}
            className="mx-auto d-block rounded"
        />
    );
};

export default BookImg;
