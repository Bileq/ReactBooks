import React, {useState} from 'react'
import './App.css';
import axios from 'axios'
import Search from './components/Search'
import Books from './components/Books'


function App() {

  const [book, setBook] = useState("");
  const [apiKey, setApiKey] = useState('API_KEY')
  const [apiResponse, setApiResponse] = useState([])
  //const [title, setTitle] = useState([])
  

  const handleChange = event => {
    const book = event.target.value
    setBook(book)
  }

  const handleSubmit = event => {
    event.preventDefault()
    //Change comments to ${book}
    axios.get(`https://jsonplaceholder.typicode.com/comments/?&_limit=5`)
      .then(response => {
        setApiResponse(response.data)
      })
  };   
  
  //console.log(apiResponse)
  
  return (
    <div className="App">
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Books
        comment={apiResponse}
      />
        
        
    </div>
  );
}

export default App;
