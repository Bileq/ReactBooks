import React from "react";
import "../../App.css";

const BookInfos = (props) => {
    const title = props.title;
    const id = props.id;
    const url = props.url;

    return (
        <>
            <dl className="row">
                <dt class="col-sm-3">Title:</dt>
                <dd class="col-sm-9">{title}</dd>

                <dt class="col-sm-3">Author:</dt>
                <dd class="col-sm-9">Stephen</dd>

                <dt class="col-sm-3">Publisher:</dt>
                <dd class="col-sm-9">Lorem Ipsum</dd>

                <dt class="col-sm-3">Genre: </dt>
                <dd class="col-sm-9">{url}</dd>

                <dt class="col-sm-3">Pages: </dt>
                <dd class="col-sm-9">{id}</dd>

                <dt class="col-sm-3">Details </dt>
                <dd class="col-sm-9">&#8595;</dd>
            </dl>
        </>
    );
};

export default BookInfos;
