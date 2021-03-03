import React from "react";
import "./style.css";

function Searchy (props) {
    return (
        <div className="search container text-center">
            <h3>Search for a Book</h3>
            <div id="searchForm"><form >
                <input onChange={props.handleTyping} placeholder="Search">
                </input>
            </form>
            <button onClick={props.handleSubmit}>Search!</button>
            </div>
            <br />
        </div>
    );
}

export default Searchy