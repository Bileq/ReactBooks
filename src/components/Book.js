import React from 'react'
import '../App.css'
import BookDesc from './book/BookDesc'
import BookDimensions from './book/BookDimensions'
import BookImg from './book/BookImg'
import BookInfos from './book/BookInfos'
import { Container, Row, Col } from 'react-bootstrap'



const Book = props => {
    const id = props.id
    const albumId = props.albumId
    const title = props.title
    const img = props.img
    const url = props.url
    

    return (
        <>
        <Container>
            <div className="book">
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
        </Container>
        </>  
    )
}

export default Book;