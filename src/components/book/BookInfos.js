import React from "react";
import "../../App.css";
import DetailsAccordion from "./DetailsAccordion";

const BookInfos = (props) => {
    const title = props.title;
    const id = props.id;
    const url = props.url;

    return (
        <div className="container">
            <div className="row pt-2">
                <div className="col-4 pb-3 fw-bold">Title:</div>
                <div className="col-8">FireStarter</div>
            </div>
            <div className="row">
                <div className="col-4 pb-3 fw-bold">Author:</div>
                <div className="col-8">Stephen</div>
            </div>
            <div className="row">
                <div className="col-4 pb-3 fw-bold">Publisher:</div>
                <div className="col-8">Lorem Ipsum</div>
            </div>
            <div className="row">
                <div className="col-4 pb-3 fw-bold">Genre:</div>
                <div className="col-8">Horror</div>
            </div>
            <div className="row">
                <div className="col-4 pb-3 fw-bold">Pages:</div>
                <div className="col-8">{id}</div>
            </div>
            {/* <div className="row">
                <div className="col col-md-8">
                    
                </div>
            </div> */}
            
        </div>
    );
};

export default BookInfos;
