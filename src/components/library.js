import React from "react";
import Books from "./Books";
import "../App.css";

const Library = ({ books, loading, setPaginationVisible }) => {
    setPaginationVisible(true);
    return (
        <div className="library">
            <Books books={books} loading={loading}/>
        </div>
    );
};

export default Library;
