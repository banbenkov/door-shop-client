import React from 'react';
import {NavLink} from "react-router-dom";

const Card = ({door}) => {
    const pictures = door.img.split(';');
    let doorImg2 = '';
    const doorImg1 = pictures[0];
    if (pictures.length > 1) {
        doorImg2 = pictures[1].trim();
    }
    return (
        <div className="col-6 col-md-4">
            <div className="card card-product" itemscope itemtype="http://schema.org/Product">
                <figure className="card-image">
                    <a href="" className="action"><i className="icon-heart"></i></a>
                    <NavLink to={`../doors/${door.id}`}>
                        <img itemprop="image" class="img-card" src={`images/doors/${doorImg1}`} alt="Image"/>
                        {doorImg2 !== '' && (<img class="img-card" src={`images/doors/${doorImg2}`} alt="Image"/>)}
                    </NavLink>
                    {door.isNew && (<span className="badge badge-success">Новое</span>)}

                </figure>
                <div className="card-footer">
                    <h3 className="card-title" itemprop="name"><NavLink
                        to={`../doors/${door.id}`}>{door.title}</NavLink></h3>
                    <span itemProp="offers" itemScope itemType="http://schema.org/Offer">
                    <meta itemProp="priceCurrency" content="RUB"/>
                    <span className="price" itemprop="price">{door.price}₽</span>
                        <link itemProp="availability" href="http://schema.org/InStock"/>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;