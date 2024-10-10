import React from 'react';

function  showAuthorSort(sort) {
    if (sort === "alphabetical") {
        return authorAlphabeticalSort()
    } else if (sort === "religious") {
        return genderSort()
    } else {
        return birthdateSort()
    }
}

function authorAlphabeticalSort() {
    return (
        <div>
            <p>SORTED ALPHABETICALLY</p>
        </div>
    );
}

function genderSort() {
    return (
        <div>
            <p>SORTED MALE and FEMALE</p>
        </div>
    );
}

function birthdateSort() {
    return (
        <div>
            <p>SORTED BIRTHDATE</p>
        </div>
    );
}

export default showAuthorSort; 