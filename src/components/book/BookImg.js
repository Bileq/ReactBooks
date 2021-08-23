import React from 'react'
import '../../App.css'
import { Image } from 'react-bootstrap'

const BookImg = props => {
    const img = props.img
    const title = props.title

    return (
        <Image 
        src={img} 
        alt={title} 
        width={128} 
        height={192}
        className="mx-auto d-block rounded"
        />
    )
}

export default BookImg;