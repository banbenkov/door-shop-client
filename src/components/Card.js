import React from 'react';
import {NavLink} from "react-router-dom";

const Card = ({door}) => {
    const pictures = door.img.split(';');
    const doorImg1 = pictures[0];
    const doorImg2 = pictures[1].trim();
    return (
        <div className="col-6 col-md-4">
            <div className="card card-product">
                <figure className="card-image">
                    <a href="" className="action"><i className="icon-heart"></i></a>
                    <NavLink to={`./${door.id}`}>
                        <img src={`images/doors/${doorImg1}`} alt="Image" />
                        <img src={`images/doors/${doorImg2}`} alt="Image" />
                    </NavLink>
                    <span className="badge badge-success">New</span>
                </figure>
                <div className="card-footer">
                    <h3 className="card-title"><a href="">{door.title}</a></h3>
                    <span className="price">{door.price}₽</span>
                </div>
            </div>
        </div>
    );
};

export default Card;