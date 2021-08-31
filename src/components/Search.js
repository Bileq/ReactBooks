import React from "react";
import "../App.css";

const Search = (props) => {
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;

    return (
        <div className="container" 
            style={{ paddingTop: "20px" }}
            >
            <form
                onSubmit={handleSubmit}
                className="row justify-content-center"
            >
                <div className="col-10 col-sm-3 align-self-end">
                    <input
                        onChange={handleChange}
                        className="form-control border-0
                                border-bottom border-dark rounded-1
                                border border-3"
                        type="text"
                        placeholder="Search..."
                        aria-label="Search button"
                        style={{ boxShadow: "0px 0px 20px 9px #000000"}}
                    />
                </div>
                <div className="col-3 col-sm-1 pt-sm-0 pt-4">
                    <button className="btn btn-info" type="submit">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Search;
