import React from "react";
import "../App.css";
import BookDesc from "./book/BookDesc";
import BookDimensions from "./book/BookDimensions";
import BookImg from "./book/BookImg";
import BookInfos from "./book/BookInfos";
import DetailsAccordion from "./book/DetailsAccordion";

const Book = ({ id, albumId, title, img, url }) => {
    return (
        <div className="container" style={{ fontSize: "10px" }}>
            <div className="row pt-5">
                <div className="col-12 col-lg my-5">
                    <BookImg title={title} img={url} />
                </div>
                <div className="col-12 mt-5 col-lg ">
                    <BookInfos id={id} url={url} title={title} />
                </div>
                <div className="col-12 col-lg mt-3">
                    <BookDimensions albumId={albumId} id={id} />
                </div>
            </div>
            <div className="row justify-content-md-center pb-5 ">
                <div className="col-md-8 col-12 pt-3 pt-md-0">
                    <DetailsAccordion id={id} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <BookDesc title={title} />
                </div>
            </div>
        </div>
    );
};

export default Book;
