import React from "react";
import Books from "../Books/index"
import "./style.css";

function Main ({ booky }) {

    return (
        <div className="main">
        <h3>Results</h3>
        <Books booky={booky}/>
        </div>
    );
}

export default Main;
