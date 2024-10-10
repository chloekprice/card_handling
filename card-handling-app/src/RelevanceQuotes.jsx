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
            <p>SORTED BY OCCUPATION/FIELD</p>
        </div>
    );
}

function popularitySort() {
    return (
        <div>
            <p>SORTED BY POPULARITY</p>
        </div>
    );
}

function dateSort() {
    return (
        <div>
            <p>SORTED BY DATE RECORDED</p>
        </div>
    );
}

export default showRelevanceSort; 