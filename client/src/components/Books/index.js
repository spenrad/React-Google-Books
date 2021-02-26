import React from "react";
import "./style.css";

function Books () {
    
    return(
    <div className="bookResult">
        <div className="row">
            <div className="col-md-10"><p>Title</p>
            <p>Author</p>
            </div>
            <div className="col-md-2">
                <button className="btn btn-info">View</button>
                <button className="btn btn-succes">Save</button>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <img src="#"/>
            </div>
            <div className="col-md-9">
                <p>Details here</p>
            </div>
        </div>
    </div>
    );
}

export default Books;