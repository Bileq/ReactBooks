import React from 'react'
import '../../App.css'

const BookDesc = props => {
    const title = props.title

    return (
        <div>{title}</div>
    )
}

export default BookDesc;