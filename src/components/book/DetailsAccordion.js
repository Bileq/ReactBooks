import React from "react";
import "../../App.css";

const DetailsAccordion = props => {
    const id = props.id
    const collapseId = `collapse${id}`
    const dataBsTargetId = `#${collapseId}`

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
                                <div className="col">Simon and Linus</div>
                            </div>
                            <div className="row">
                                <div className="col text-truncate fw-bold">Published Date:</div>
                                <div className="col">2019-01-15</div>
                            </div>
                            <div className="row">
                                <div className="col fw-bold">Language:</div>
                                <div className="col">en</div>
                            </div>
                            <div className="row">
                                <div className="col fw-bold">Pages:</div>
                                <div className="col">528</div>
                            </div>
                            <div className="row">
                                <div className="col fw-bold">ISBN:</div>
                                <div className="col text-truncate">1234567890123</div>
                            </div>
                            <div className="row justify-content-center"> 
                                <div className="col fw-bold">Preview link:</div>
                                <div className="col">
                                    <a
                                    //Change title to {title}
                                    href="http://books.google.pl/books?id=ZfFwDwAAQBAJ&pg=PT4&dq=firestarter&hl=&cd=1&source=gbs_api"
                                    className="link-primary">FireStarter
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
