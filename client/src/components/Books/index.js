import React from "react";
import "./style.css";

function Books(props) {
    return(
    props.booky.map(function (boox) {
      return (
        <div className="bookResult" key={boox.id}>
          <div className="row">
            <div className="col-md-9">
              <p className="title">
                {boox.volumeInfo.title}</p>
            <p className="author">{boox.volumeInfo.authors}</p>
              
            </div>

            <br />

            <div className="col-md-3">
              <a href={boox.saleInfo.buyLink}> <button className="btn viewBtn"><span className="btnSpan">View</span></button></a>
              <button className="btn saveBtn" onClick={() =>props.handleSave({
                  title: boox.volumeInfo.title,
                  authors: boox.volumeInfo.authors.join(", "),
                  description: boox.volumeInfo.description,
                  image: boox.volumeInfo.imageLinks.thumbnail,
                  link: boox.saleInfo.buyLink
                  })}><span className="btnSpan">Save</span></button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <img src={boox.volumeInfo.imageLinks ? boox.volumeInfo.imageLinks.thumbnail : "https://i.imgur.com/lrPn7VM.jpeg"} alt={boox.title} />
            </div>
            <div className="col-md-9">
              <p className="plot">{boox.volumeInfo.description}</p>
            </div>
          </div>
          <br /><br />
        </div>
      );
    })
  );
}

export default Books;
