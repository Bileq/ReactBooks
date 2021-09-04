import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search";
import Library from "./components/library";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Pagination from "./components/Pagination";

function App() {
    const [book, setBook] = useState("");
    const [apiKey, setApiKey] = useState("process.env.REACT_APP_API_KEY");
    const [apiResponse, setApiResponse] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [loading, setLoading] = useState(false);

    const handleChange = event => {
        const book = event.target.value;
        setBook(book);
    };

    const handleSubmit = event => {
        event.preventDefault();
        //Change comments to ${book}
        const fetchApiResponse = async () => {
            setLoading(true)
            const response = await axios
                .get(`https://jsonplaceholder.typicode.com/photos/?&_limit=10`)
            setApiResponse(response.data)
            setLoading(false)
            }
        fetchApiResponse()
    };
    return (
        <div className="App">
            <div className="HeaderWrapper">
            <Header />
                <Search
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </div>
            <div className="bookApp">
                <Library books={apiResponse} loading={loading}/>
                <Pagination />
            </div>
        </div>
    );
}

export default App;
