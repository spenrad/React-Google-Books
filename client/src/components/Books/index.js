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
              <a href={boox.saleInfo.buyLink}> <button className="btn btn-info">View</button></a>
              <button className="btn btn-succes" id={boox.id} onClick={() =>props.handleSave({
                  title: boox.volumeInfo.title,
                  authors: boox.volumeInfo.authors,
                  buyLink: boox.saleInfo.buyLink,
                  id: boox.id,
                  image: boox.volumeInfo.imageLinks.thumbnail,
                  description: boox.volumeInfo.description})}>Save</button>
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
