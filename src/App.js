import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search";
import Library from "./components/library";
import "bootstrap/dist/css/bootstrap.min.css";
//import background from "./media/library.jpg";

function App() {
    const [book, setBook] = useState("");
    const [apiKey, setApiKey] = useState("process.env.REACT_APP_API_KEY");
    const [apiResponse, setApiResponse] = useState([]);

    const handleChange = (event) => {
        const book = event.target.value;
        setBook(book);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //Change comments to ${book}
        axios
            .get(`https://jsonplaceholder.typicode.com/photos/?&_limit=10`)
            .then((response) => {
                setApiResponse(response.data);
            });
    };

    return (
        <div className="App">
            <div className="bookApp">
                <Search
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
                <Library books={apiResponse} />
            </div>
        </div>
    );
}

export default App;
