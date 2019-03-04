import React from 'react';

const BookCard = (props) => {
    return (
        <div className="card-container">
            <img src={props.image} alt="" />
            <div className="desc">
                <h2>{props.title}</h2>
                <h3>Author: {props.author}</h3>
                <p>Published Date: {props.published === '0000' ? 'Not Available' : props.published.substring(0, 4)}</p>
                <a target='_blank' href={props.infoLink}><button class="button">Learn More!</button></a>
            </div>
        </div>
    )
}

export default BookCard;