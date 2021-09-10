import React from "react";
import "../../App.css";
import placeholder from "../../media/placeholder.png";

const BookImg = ({ url, title }) => {
    let imageSrc = "";

    typeof url === "undefined"
        ? (imageSrc = placeholder)
        : (imageSrc = url.thumbnail);
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
