import React, { useState } from "react";
import Tab from "./Tab";
import "./App.css";
import showAuthorSort from "./AuthorQuotes";
import showRelevanceSort from "./RelevanceQuotes";
import showTopicSort from "./TopicQuotes";

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(1);
    const[value, setValue] = useState('alphabetical')


    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    function quotes(value) {
        if (value === 0) {
            return showAuthors();
        } else if (value === 1) {
            return showTopics();
        } else {
            return showRelevance(); 
        }
    }

    var options0 = [
        { label: 'Alphabetical', value: 'alphabetical' },
        { label: 'Male vs Female', value: 'gender' },
        { label: 'By Birthdate', value: 'birthdate' },
      ];

      var options1 = [
        { label: 'Alphabetical', value: 'alphabetical' },
        { label: 'Religious vs Nonreligious', value: 'religious' },
        { label: 'By Use', value: 'repeated' },
      ];

      var options2 = [
        { label: 'By Occupation', value: 'occupation' },
        { label: 'By Popularity', value: 'popularity' },
        { label: 'By Date', value: 'date' },
      ];
    
    const handleSortClick = (event) => {
        setValue(event.target.value);
    };

    function showAuthors() {
        return (
            <div className="tab-content">
                <select value={value} onChange={handleSortClick}>
                    {options0.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                {showAuthorSort(value)}
            </div>
        );
    }

    function showTopics() {
        return (
            <div className="tab-content">
                <select value={value} onChange={handleSortClick}>
                    {options1.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                {showTopicSort(value)}
            </div>
        );
    }

    function showRelevance() {
        return (
            <div className="tab-content">
                <select value={value} onChange={handleSortClick}>
                    {options2.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                {showRelevanceSort(value)}
            </div>
        );
    }

    return (
        <div className="tabs-container">
            <div className="tabs">
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        label={tab.label}
                        onClick={() =>
                            handleTabClick(index)
                        }
                        isActive={index === activeTab}
                    />
                ))}
            </div>
            {quotes(activeTab)}
        </div>
    );
};

export default Tabs;