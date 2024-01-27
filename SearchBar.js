import React from 'react';

export default function SearchBar() {
    const sorting = {
        best_match : 'best_match',
        rating : 'rating',
        review_count : 'review_count'
    };

    return (
        <form>
            <section class="sorting">
                <input
                    type="radio"
                    name="sorting"
                    id="best_match"
                    value="best_match"
                />
                <label for="best_match">Best Match</label>
                <input
                    type="radio"
                    name="sorting"
                    id="rating"
                    value="rating"
                />
                <label for="rating">Highest Rated</label>
                <input
                    type="radio"
                    name="sorting"
                    id="review_count"
                    value="review_count"
                />
                <label for="review_count">Most Reviewed</label>
            </section>
            <input 
                type="text"
                placeholder="Search Businesses"
            />
            <input
                type="text"
                placeholder="Where?"
            />
        </form>
    );
};