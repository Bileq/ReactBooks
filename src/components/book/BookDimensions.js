import React from 'react'
import '../../App.css'

const BookDimensions = props => {
    const albumId = props.albumId
    const id = props.id

    return (
        <div>Dimensions: {albumId} x {id} x {id}</div>
    )
}

export default BookDimensions;