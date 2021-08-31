import React from 'react'
import '../../App.css'

const BookDesc = props => {
    const title = props.title

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-7 mt-md-0 mt-5 text-start text-md-justify text fs-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Cras dapibus nulla a metus mollis, vitae consectetur enim dapibus. 
                Vestibulum tempor ligula et purus laoreet euismod. Integer aliquam maximus metus,
                nec volutpat nunc pretium et. Ut mollis venenatis sem, {title} id posuere ligula scelerisque id.
                Mauris et mi arcu.Morbi ultricies augue ac ornare rutrum. Aenean tempor eu sem in ultrices. 
                </div>
            </div>
        </div>
    )
}

export default BookDesc;