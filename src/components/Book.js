import React from 'react'
import '../App.css'
import BookImg from './book/BookImg'
import BookTitle from './book/BookTitle'

const Book = props => {
    const img = props.img
    const title = props.title

    return (
        <div className="book">
            <BookImg img={img} title={title}/>
            <BookTitle title={title}/>
        </div>        
    )
}

export default Book;