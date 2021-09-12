import React from "react";
import "../App.css";
import BookDesc from "./book/BookDesc";
import BookImg from "./book/BookImg";
import BookRating from "./book/BookRating"
import BookInfos from "./book/BookInfos";
import DetailsAccordion from "./book/DetailsAccordion";

const Book = ({
    url,
    title,
    author,
    publisher,
    genre,
    pages,
    publishedDate,
    lang,
    isbn,
    previewLink,
    description,
    averageRating,
    ratingsCount,
    id
}) => {
    return (
        <div className="container" style={{ fontSize: "10px", paddingTop: "20%" }}>
            <div className="row pt-5">
                <div className="col-12 col-lg my-5">
                    <BookImg title={title} url={url} />
                </div>
                <div className="col-12 mt-5 col-lg ">
                    <BookInfos
                        title={title}
                        author={author}
                        publisher={publisher}
                        genre={genre}
                        pages={pages}
                    />
                </div>
                <div className="col-12 col-lg mt-3">
                    <BookRating averageRating={averageRating} ratingsCount={ratingsCount}/>
                </div>
            </div>
            <div className="row justify-content-md-center pb-5 ">
                <div className="col-md-8 col-12 pt-3 pt-md-0">
                    <DetailsAccordion
                        publisher={publisher}
                        publishedDate={publishedDate}
                        lang={lang}
                        pages={pages}
                        isbn={isbn}
                        previewLink={previewLink}
                        title={title}
                        id={id}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <BookDesc description={description} />
                </div>
            </div>
        </div>
    );
};

export default Book;
