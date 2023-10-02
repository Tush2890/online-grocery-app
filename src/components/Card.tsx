import React from 'react';

interface Props {
    imgSrc: string;
    title: string;
    text: string;
    classNames: string;
    onClick?: () => void
}

export const Card = ({ imgSrc, title, text, classNames, onClick }: Props) => {
    return (
        <div className={`card ${classNames}`} onClick={onClick}>
            <img src={imgSrc} className="card-img-top" width={300} height={300} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    )
}