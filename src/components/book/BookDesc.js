import React from "react";
import "../../App.css";
import ReadMoreReact from "read-more-react";

const BookDesc = ({ description }) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div
                    className="col-12 col-md-7 mt-md-0 mt-5 text-start 
                text-md-justify text fs-6 pb-2"
                >
                    <div>
                        <ReadMoreReact
                            text={description}
                            min={400}
                            ideal={500}
                            max={600}
                            readMoreText={
                                <div className="text-info fs-6">Read More</div>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDesc;
