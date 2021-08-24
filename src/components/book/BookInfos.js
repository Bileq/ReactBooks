import React from "react";
import "../../App.css";

const BookInfos = (props) => {
    const title = props.title;
    const id = props.id;
    const url = props.url;

    return (
        <>
            <dl className="row">
                <dt className="col-sm-3">Title:</dt>
                <dd className="col-sm-9">Firefighter</dd>

                <dt className="col-sm-3">Author:</dt>
                <dd className="col-sm-9">Stephen</dd>

                <dt className="col-sm-3">Publisher:</dt>
                <dd className="col-sm-9">Lorem Ipsum</dd>

                <dt className="col-sm-3">Genre: </dt>
                <dd className="col-sm-9">Horror</dd>

                <dt className="col-sm-3">Pages: </dt>
                <dd className="col-sm-9">{id}</dd>

                <dt className="col-sm-3">Details </dt>
                <dd className="col-sm-9">Accordion:&#8595;</dd>
            </dl>
        </>
    );
};

export default BookInfos;
