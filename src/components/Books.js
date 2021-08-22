import React from 'react'
import Book from './Book'
import '../App.css'
import PropTypes from 'prop-types'

const Books = props => {
    const books = props.books

    return (
        books.map( book => (
            <div className="Books" key={book.id}> 
            <Book 
                img={book.thumbnailUrl}
                title={book.title}
            />
            </div>
    )))
}
   
Books.propTypes = {
    thumbnailUrl: PropTypes.node,
    title: PropTypes.string,
    id: PropTypes.string,
}

export default Books;