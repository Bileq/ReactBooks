import React from 'react'
import '../../App.css'

const BookInfos = props => {
    const title = props.title
    const id = props.id
    const url = props.url

    return (
        <>
        <div>
            Title: {title} <br/>
            Author: Stephen <br/>
            Publisher: Lorem Ipsum <br/>
            Genre: {url} <br/>
            pages: {id} <br/>
        </div>
        <div>
            Details
        </div>
        </>
    )
}

export default BookInfos;