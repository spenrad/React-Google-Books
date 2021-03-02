import React from "react";
import "./style.css";

function Books(props) {
  return(
    props.booky.map(function (boox) {
      return (
        <div className="bookResult">
          <div className="row">
            <div className="col-md-10">
              <p>{boox.volumeInfo.title}</p>
              <p>{boox.volumeInfo.authors}</p>
            </div>
            <div className="col-md-2">
              <button className="btn btn-info" href={boox.saleInfo.buyLink}>View</button>
              <button className="btn btn-succes">Save</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <img src={boox.volumeInfo.imageLinks.thumbnail} />
            </div>
            <div className="col-md-9">
              <p>{boox.volumeInfo.description}</p>
            </div>
          </div>
        </div>
      );
    })
  );
}

export default Books;
