import React, { useState } from 'react';
import { Business } from './Business.js';

export default function BusinessList() {
    const [restaurants, setRestaurants] = useState([
        {
            image: './Pizza-Hut.jpg',
            name: 'Pizza Hut',
            address: '1980 Amsterdam Ave',
            city: ' New York',
            state: 'NY',
            zipcode: '10032',
            category: 'Italian',
            rating: 2.9,
            reviewCount: 153
        },
        {
            image: './McDonalds.png',
            name: 'McDonalds',
            address: '541 6th Ave',
            city: ' New York',
            state: 'NY',
            zipcode: '10011',
            category: 'American',
            rating: 3.7,
            reviewCount: 1906
        },
        {
            image: './Taco-Bell.png',
            name: 'Taco Bell',
            address: '840 8th Ave',
            city: ' New York',
            state: 'NY',
            zipcode: '10019',
            category: 'Mexican',
            rating: 4.1,
            reviewCount: 1540
        }
    ]);
    
    return (
        <ul>
            {restaurants.map(business => (
                <Business business={business}/>    
            ))}
        </ul>
    );

};
