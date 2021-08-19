import React from 'react'
import Book from './Book'
import '../App.css'

const Books = props => {
    const books = props.books

    return (
        books.map( book => (
            <div className="Books">
            <Book 
                img={book.thumbnailUrl}
                title={book.title}
            />
            </div>
    )))
}
   


export default Books;