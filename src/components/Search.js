import React from "react";
import "../App.css";

//check background import in app.js

const Search = (props) => {
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;

    return (
        <div className="container">
            <form
                onSubmit={handleSubmit}
                className="row justify-content-center "
            >
                <div className="col-auto">
                    <input
                        onChange={handleChange}
                        className="form-control border-0
                                border-bottom border-dark rounded-1
                                border border-3"
                        type="text"
                        placeholder="Search..."
                        aria-label="Search button"
                    />
                </div>
                <div className="col-auto pt-md-0 pt-5">
                    <button className="btn btn-warning" type="submit">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Search;
