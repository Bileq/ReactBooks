import React from 'react'
import Books from './Books'
import '../App.css'

const Library = props => {
    const books = props.books

    return (
        <div className="Library">
            <Books books={books} />
        </div>
    )
}
   


export default Library;