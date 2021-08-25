import React from "react";
import "../../App.css";

const BookDimensions = (props) => {
    const albumId = props.albumId;
    const id = props.id;

    return (
        <div className="container pt-5">
            <div className="row justify-content-center">
                <div className="col col-md-4 text-truncate fw-bold pb-3">Height:</div>
                <div className="col col-md-8">{albumId}</div>
            </div>
            <div className="row justify-content-center">
                <div className="col col-md-4 text-truncate fw-bold pb-3">Width:</div>
                <div className="col col-md-8">{albumId}</div>
            </div>
            <div className="row justify-content-center pb-3">
                <div className="col col-md-4 text-truncate fw-bold">Thickness:</div>
                <div className="col col-md-8">{id}</div>
            </div>
        </div>
    );
};

export default BookDimensions;
