import React from 'react'
import '../../App.css'

const BookTitle = props => {
    const title = props.title

    return (
        <div>{title}</div>
    )
}

export default BookTitle;