import React from "react";
import Books from "./Books";
import "../App.css";

const Library = ({ books, loading }) => {
    return (
        <div className="Library">
            <Books books={books} loading={loading} />
        </div>
    );
};

export default Library;
