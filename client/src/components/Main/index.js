import React from "react";
import Books from "../Books/index"
import "./style.css";

function Main ({ booky, handleSave}) {

    return (
        <div className="main">
        <h3>Results</h3>
        <Books booky={booky} handleSave={handleSave}/>
        </div>
    );
}

export default Main;
