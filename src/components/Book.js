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
            <div className="book">
                <Row>
                    <Col className="p-5">
                        <BookImg 
                            img={img}
                            title={title}
                        />
                    </Col>
                    <Col>
                        <BookInfos 
                            id={id}
                            url={url}
                            title={title}
                        />
                    </Col>
                    <Col>
                        <BookDimensions 
                            albumId={albumId} 
                            id={id}
                        />
                    </Col>
                </Row>
                <Row className="pt-5">
                    <BookDesc title={title}/>
                </Row>
                
            </div>
        </>  
    )
}

export default Book;