import React from 'react';
import './Pizza-Hut.jpg';
import './McDonalds.png';
import './Taco-Bell.png';

export default function Business(props) {
    const { business } = props;
    return (
        <>
            <img src={business.image}/>
            <p className="name">{business.name}</p>
            <div className="leftColumnRestaurant">
                <p>{business.address}</p>
                <p>{business.city}</p>
                <p>{business.state + ' ' + business.zipcode}</p>
            </div>
            <div className="rightColumnRestaurant">
                <p>{business.category}</p>
                <p>{business.rating + ' stars'}</p>
                <p>{business.reviewCount + ' reviews'}</p>
            </div>
        </>
    );
}

