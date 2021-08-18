import React, {useState} from 'react'
import './App.css';
import axios from 'axios'
import Search from './components/Search'


function App() {

  const [book, setBook] = useState('');
  const [apiKey, setApiKey] = useState('AIzaSyBv1luZ0uhkKsYH6zvnE_aizYBJsUq_ShI')
  const [apiResponse, setApiResponse] = useState("")
  
  const handleChange = event => {
    const book = event.target.value
    setBook(book)
  }

  const handleSubmit = event => {
    event.preventDefault();

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=1`)
    .then( response => {
      setApiResponse(response.data.items)
    })

  }

  return (

    <div className="App">
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        />
    </div>
  );
}

export default App;
