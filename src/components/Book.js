import React from "react";
import "../App.css";
import BookDesc from "./book/BookDesc";
import BookDimensions from "./book/BookDimensions";
import BookImg from "./book/BookImg";
import BookInfos from "./book/BookInfos";
import { Row, Col } from "react-bootstrap";

const Book = (props) => {
    const id = props.id;
    const albumId = props.albumId;
    const title = props.title;
    const img = props.img;
    const url = props.url;

    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-12 col-lg my-5">
                    <BookImg 
                        img={img}
                        title={title}
                    />
                </div>
                <div className="col-12 col-lg mt-5 align-self-center">
                    <BookInfos 
                        id={id}
                        url={url}
                        title={title}
                    />
                </div>
                <div className="col-12 col-lg mt-5">
                    <BookDimensions 
                        albumId={albumId}
                        id={id}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <BookDesc 
                        title={title}
                    />
                </div>
            </div>
        </div>
    );
};

export default Book;
