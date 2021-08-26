import React from "react";
import "../App.css"


const Search = (props) => {
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="row justify-content-center">
                <div className="col-auto">
                    <input
                        onChange={handleChange}
                        className="form-control border-0 border-bottom border-dark border-3 rounded-1"
                        type="text"
                        placeholder="Search..."
                        aria-label="Search button"
                    />
                </div>
                <div className="col-auto">
                    <button className="search btn btn-warning" type="submit">
                        Search
                    </button>
                </div>
            </form>
        </div>
        // </div>
        // <div className="container">
        //     <form className="row" onSubmit={handleSubmit}>
        //         <div className="col-auto">
        //             <input
        //                 onChange={handleChange}
        //                 className="form-control"
        //                 type="text"
        //                 placeholder="Search..."
        //                 aria-label="Search button"
        //             />
        //         </div>
        //         <div className="col">
        //             <div className="col-auto">
        //                 <button className="btn btn-success ms-5" type="submit">
        //                     Search
        //                 </button>
        //             </div>
        //         </div>
        //     </form>
        // </div>
    );
};

export default Search;
