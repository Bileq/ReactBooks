import React from "react";
import "../App.css";

const ResultsNotFound = ({setPaginationVisible}) => {
    setPaginationVisible(false)
    return (

        <div className="resultsNotFound text-center pt-5 fs-4">
            Results not found!
        </div>
    );
};

export default ResultsNotFound;
