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
    const [apiKey] = useState("process.env.REACT_APP_API_KEY");
    const [apiResponse, setApiResponse] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(10);
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const book = event.target.value;
        setBook(book);
    };

    const fetchApiResponse = async () => {
        setLoading(true);
        //Change comments to ${book}
        const response = await axios
            .get(`https://jsonplaceholder.typicode.com/photos?&_limit=100`)
            //.catch(() => document.write("Something went wrong"));
        setApiResponse(response.data);
        setLoading(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchApiResponse();
    };

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
            <div className="bookApp">
                <Library books={currentBooks} loading={loading} />
                <Pagination
                    booksPerPage={booksPerPage}
                    totalBooks={apiResponse.length}
                    paginate={paginate}
                />
            </div>
        </div>
    );
}

export default App;
