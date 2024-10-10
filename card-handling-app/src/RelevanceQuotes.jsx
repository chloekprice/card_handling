import React from 'react';

function  showRelevanceSort(sort) {
    if (sort === "alphabetical") {
        return occupationSort()
    } else if (sort === "religious") {
        return popularitySort()
    } else {
        return dateSort()
    }
}

function occupationSort() {
    return (
        <div>
            <p>SORTED ALPHABETICALLY</p>
        </div>
    );
}

function popularitySort() {

}

function dateSort() {
    return (
        <div>
            <p>SORTED ALPHABETICALLY</p>
        </div>
    );
}

export default showRelevanceSort; 