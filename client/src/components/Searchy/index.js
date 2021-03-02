import React from "react";

function Searchy (props) {
    return (
        <div className="search">
            <h3>Search for a Book</h3>
            <div id="searchForm"><form >
                <input onChange={props.handleSubmit} placeholder="Search">
                </input>
            </form></div>
        </div>
    );
}

export default Searchy