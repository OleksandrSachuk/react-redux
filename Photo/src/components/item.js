import React  from 'react';

const Item = (props) => {
    return(
        <div className="card">
            <img className="card-img-top" src={ props.imageSrc } role="presentation" />
                <div className="card-block">
                    <h4 className="card-title">{props.cardTitle}</h4>
                    <p className="card-text">Number of comments: <span className="card-text-comments">{props.cardComments}</span></p>
                    <a href={props.cardLink} className="">Link</a>
                </div>
        </div>
    )
};

export default Item;