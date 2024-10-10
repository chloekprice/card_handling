import React from 'react';

function  showTopicSort(sort) {
    if (sort === "alphabetical") {
        return topicAlphabeticalSort()
    } else if (sort === "religious") {
        return religiousSort()
    } else {
        return repeatedSort()
    }
}

function topicAlphabeticalSort() {
    return (
        <div>
            <p>SORTED ALPHABETICALLY</p>
        </div>
    );
}

function religiousSort() {

}

function repeatedSort() {
    return (
        <div>
            <p>SORTED ALPHABETICALLY</p>
        </div>
    );
}

export default showTopicSort; 
