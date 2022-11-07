import React from 'react';
import {NavLink, useLocation} from "react-router-dom";

const CardFurniture = ({furniture}) => {
    const location = useLocation();
    const pictures = furniture.image.split(';');
    const furnitureImg1 = pictures[0];
    return (
        <div className="col-6 col-md-4">
            <div className="card card-product">
                <figure className="card-image">
                    <a href="" className="action"><i className="icon-heart"></i></a>
                    <NavLink to={`${furniture.id}`}>
                        <img src={`images/furnitura/${furnitureImg1}`} alt="Image" />
                    </NavLink>
                </figure>
                <div className="card-footer">
                    <h3 className="card-title"><NavLink to={`${furniture.id}`} >{furniture.title}</NavLink></h3>
                    <span className="price">{furniture.price}₽</span>
                </div>
            </div>
        </div>
    );
};

export default CardFurniture;