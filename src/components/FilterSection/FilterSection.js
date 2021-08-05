import React from 'react';
import './FilterSection.css'
const FilterSection = () => {
    return (
        <div>
            <div className="heading-titles">
                <div className="titles">
                    <h3>Add Another keyword</h3>
                    <span>1/3</span>
                    <h4>Upgrade</h4>
                </div>
                <div className="search-btn">
                    <h4>Advance Search</h4>
                </div>
            </div>
            <div className="filter-box">
                <form action="">
                    <input type="text" placeholder="Enter your filters here" className="filter-input"/>
                    <button className="btn btn-primary">Save Filter</button>
                </form>
            </div>
        </div>
    );
};

export default FilterSection;