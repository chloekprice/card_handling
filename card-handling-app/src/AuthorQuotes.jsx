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

}

function birthdateSort() {
    return (
        <div>
            <p>SORTED ALPHABETICALLY</p>
        </div>
    );
}

export default showAuthorSort; 