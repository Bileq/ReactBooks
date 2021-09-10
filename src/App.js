import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search";
import Library from "./components/library";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import ResultsNotFound from "./components/ResultsNotFound";
require('dotenv').config();

function App() {
    const [book, setBook] = useState("");
    const [apiKey] = useState(process.env.REACT_APP_API_KEY);
    const [apiResponse, setApiResponse] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(10);
    const [loading, setLoading] = useState(false);
    const [paginationVisible, setPaginationVisible] = useState(false);
    const [zeroResults, setZeroResults] = useState(false);

    const handleChange = (event) => {
        const book = event.target.value;
        setBook(book);
    };
    const fetchApiResponse = async () => {
        setLoading(true);
        //Change comments to ${book}
        const response = await axios
            .get(`https://jsonplaceholder.typicode.com/photos?&_limit=${book}`)
            .catch(() => document.write("Something went wrong"));
        setLoading(false);
        setApiResponse(response.data);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchApiResponse();
    };

    //Make pagination invisible on page load and handleChange re-renders

    useEffect(() => {
        setPaginationVisible(false)
    },[book])

    //set zeroResults

    const isInitialMount = useRef(true);

    useEffect(() => {
        isInitialMount.current
            ? (isInitialMount.current = false)
            : setZeroResults(apiResponse.length <= 0)
    }, [apiResponse]);

    //Scroll to the top if page has been changed

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    //Change page

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //Get current Books

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = apiResponse.slice(indexOfFirstBook, indexOfLastBook);

    return (
        <div className="App">
            <div className="HeaderWrapper">
                <Header />
                <Search
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </div>
            {zeroResults === false ? (
                <div className="bookApp">
                    <Library
                        books={currentBooks}
                        loading={loading}
                        setPaginationVisible={setPaginationVisible}
                    />
                </div>
            ) : (
                <ResultsNotFound
                    setPaginationVisible={setPaginationVisible}
                />
            )}
            {paginationVisible === true ? (
                <Pagination
                    booksPerPage={booksPerPage}
                    totalBooks={apiResponse.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            ) : null}
        </div>
    );
}

export default App;
