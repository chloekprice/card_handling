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
            <h2 class="sort-name">A</h2>
            <h2 class="sort-name">B</h2>
            <h2 class="sort-name">C</h2>
            <h2 class="sort-name">D</h2>
            <h2 class="sort-name">E</h2>
            <h2 class="sort-name">F</h2>
            <h2 class="sort-name">G</h2>
            <h2 class="sort-name">H</h2>
            <h2 class="sort-name">I</h2>
            <h2 class="sort-name">J</h2>
            <h2 class="sort-name">K</h2>
            <h2 class="sort-name">L</h2>
            <h2 class="sort-name">M</h2>
            <h2 class="sort-name">N</h2>
            <h2 class="sort-name">O</h2>
            <h2 class="sort-name">P</h2>
            <h2 class="sort-name">Q</h2>
            <h2 class="sort-name">R</h2>
            <h2 class="sort-name">S</h2>
            <div class="quote">
                <h3 class="quote-text">“How did it get so late so soon?”</h3>
                <p class="quote-author">-Dr.Seuss</p>
            </div>
            <h2 class="sort-name">T</h2>
            <h2 class="sort-name">U</h2>
            <h2 class="sort-name">V</h2>
            <h2 class="sort-name">W</h2>
            <h2 class="sort-name">X</h2>
            <h2 class="sort-name">Y</h2>
            <h2 class="sort-name">Z</h2>
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