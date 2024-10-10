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
            <h2 class="sort-name">S</h2>
            <div class="quote">
                <h3 class="quote-text">“How did it get so late so soon?”</h3>
                <p class="quote-author">-Dr.Seuss</p>
            </div>
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