import React, { useState } from "react";
import Tab from "./Tab";
import "./App.css";
import AlphabeticalQuotes from './AlphabeticalQuotes.js';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(1);
    const[value, setValue] = useState('alphabetical')

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const options = [

        { label: 'Alphabetical', value: 'alphabetical' },
     
        { label: 'By Location', value: 'location' },
     
        { label: 'By Birthdate', value: 'birthdate' },
     
      ];


    const handleSortClick = (event) => {
        setValue(event.target.value);
    };

    function quotes(value) {
        if (value === 'alphabetical') {
            return <p>QUOTES</p>;
        } else if (value === 'location') {
            return <p>QUOTES</p>;
        } else {
            return <p>QUOTES</p>; 
        }
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
            <div className="tab-content">
                <select value={value} onChange={handleSortClick}>
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <p>{value}</p>
                {quotes(value)}
                <AlphabeticalQuotes />
            </div>
        </div>
    );
};

export default Tabs;