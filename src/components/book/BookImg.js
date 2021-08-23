import React from 'react'
import '../../App.css'

const BookImg = props => {
    const img = props.img
    const title = props.title

    return (
        <div className="bookImg">
            <img src={img} alt={title} />
        </div>
        
    )
}

export default BookImg;