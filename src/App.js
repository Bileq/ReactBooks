import React, {useState} from 'react'
import './App.css';
import axios from 'axios'
import Search from './components/Search'


function App() {

  const [book, setBook] = useState('');
  //const [apiKey, setApiKey] = useState('API_KEY')

  const handleChange = event => {
    setBook(event.target.value)
    console.log("change")

  }

  const handleSubmit = event => {
    event.preventDefault();


    console.log(book)
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
