import React from "react";
import "../../App.css";

const DetailsAccordion = ({
    id,
    publisher,
    publishedDate,
    lang,
    pages,
    isbn,
    previewLink,
    title,
}) => {
    const collapseId = `collapse${id}`;
    const dataBsTargetId = `#${collapseId}`;
    let isbnNumber = ""

    typeof isbn === "undefined" ? isbnNumber = ""
    : isbnNumber= isbn[0].identifier

    return (
        <div className="accordion accordion-flush" id="details">
            <div className="accordion-item">
                <h6 className="accordion-header" id="headingOne">
                    <button
                        className="accordion-button 
                        collapsed fw-bold ps-0 
                        pe-4 pe-md-5 ps-4 justify-content-center 
                        bg-info text-black rounded"
                        style={{ fontSize: 10 }}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={dataBsTargetId}
                        aria-expanded="false"
                        aria-controls={collapseId}
                    >
                        Details
                    </button>
                </h6>
                <div
                    id={collapseId}
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#details"
                >
                    <div className="accordion-body text-justify-start p-0">
                        <div className="container accordionBody">
                            <div className="row pt-3">
                                <div className="col fw-bold">Publisher:</div>
                                <div className="col">{publisher}</div>
                            </div>
                            <div className="row">
                                <div className="col text-truncate fw-bold">
                                    Published Date:
                                </div>
                                <div className="col">{publishedDate}</div>
                            </div>
                            <div className="row">
                                <div className="col fw-bold">Language:</div>
                                <div
                                    className="col"
                                    style={{ textTransform: "uppercase" }}
                                >
                                    {lang}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col fw-bold">Pages:</div>
                                <div className="col">{pages}</div>
                            </div>
                            <div className="row">
                                <div className="col fw-bold">ISBN:</div>
                                <div className="col text-truncate">{isbnNumber}</div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col fw-bold">Preview link:</div>
                                <div className="col">
                                    <a
                                        href={previewLink}
                                        className="link-primary"
                                    >
                                        {title}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsAccordion;
