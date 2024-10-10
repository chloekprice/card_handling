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
    return (
        <div>
            <p>SORTED BY RELIG and NON RELIG</p>
        </div>
    );
}

function repeatedSort() {
    return (
        <div>
            <p>SORTED BY NUM OF THAT TOPIC</p>
        </div>
    );
}

export default showTopicSort; 
