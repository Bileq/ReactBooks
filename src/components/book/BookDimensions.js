import React from "react";
import "../../App.css";

const BookDimensions = (props) => {
    const albumId = props.albumId;
    const id = props.id;

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-5 col-md col-7 text-truncate">Height:</div>
                <div className="col-xl-7 col-md col-5">{albumId}</div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-5 col-md col-7 text-truncate">Width:</div>
                <div className="col-xl-7 col-md col-5">{albumId}</div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-5 col-md col-7 text-truncate">Thickness:</div>
                <div className="col-xl-7 col-md col-5">{id}</div>
            </div>

        </div>
    );
};

export default BookDimensions;
