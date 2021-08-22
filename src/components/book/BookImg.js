import React from 'react'
import '../../App.css'

const BookImg = props => {
    const img = props.img
    const title = props.title

    return (
        <img src={img} alt={title} />
    )
}

export default BookImg;