import React from "react";
import "../../App.css";
import placeholder from "../../media/placeholder.png";

const BookImg = ({ url, title }) => {
    const imageSrc = url?.thumbnail ?? placeholder
    return (
        <img
            src={imageSrc}
            alt={title}
            width={128}
            height={192}
            className="mx-auto d-block rounded"
        />
    );
};

export default BookImg;
