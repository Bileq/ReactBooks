import React from 'react'
import Book from './Book'
import '../App.css'
import PropTypes from 'prop-types'

const Books = props => {
    const books = props.books

    return (
        books.map( book => (
            <div className="books" key={book.id}> 
            <Book 
                id={book.id}
                img={book.thumbnailUrl}
                title={book.title}
                albumId={book.albumId}
                url={book.url}
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