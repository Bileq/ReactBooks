import React from 'react'
import '../App.css'
import BookDesc from './book/BookDesc'
import BookDimensions from './book/BookDimensions'
import BookImg from './book/BookImg'
import BookInfos from './book/BookInfos'

const Book = props => {
    const id = props.id
    const albumId = props.albumId
    const title = props.title
    const img = props.img
    const url = props.url
    

    return (
        <div className="book">
            <hr></hr><hr></hr>
            <BookImg 
                img={img}
                title={title}
            />
            <hr></hr>
            <BookInfos 
                id={id}
                url={url}
                title={title}
            />
            <hr></hr>
            <BookDimensions 
                albumId={albumId} 
                id={id}
            />
            <hr></hr>
            <BookDesc title={title}/>
        </div>        
    )
}

export default Book;