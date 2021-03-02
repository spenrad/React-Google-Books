import React from "react";
import "./style.css";

function Books(props) {
    return(
    props.booky.map(function (boox) {
      return (
        <div className="bookResult" key={boox.id}>
          <div className="row">
            <div className="col-md-10">
              <p>{boox.volumeInfo.title}</p>
              <p>{boox.volumeInfo.authors}</p>
            </div>
            <div className="col-md-2">
              <a href={boox.saleInfo.buyLink}> <button className="btn btn-info">View</button></a>
              <button className="btn btn-succes"  onClick={() =>props.handleSave({
                  title: boox.volumeInfo.title,
                  authors: boox.volumeInfo.authors.join(", "),
                  description: boox.volumeInfo.description,
                  image: boox.volumeInfo.imageLinks.thumbnail,
                  link: boox.saleInfo.buyLink
                  })}>Save</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <img src={boox.volumeInfo.imageLinks ? boox.volumeInfo.imageLinks.thumbnail : "https://i.imgur.com/lrPn7VM.jpeg"} alt={boox.title} />
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
