import React, { useState, useEffect } from "react";
import API from "../../utils/API";



function Saved() {

  const [library, setLibrary] = useState(
      []
  )

  useEffect(function () {
    API.getBooks().then(function(res) {
      console.log("look at this SHIT", res.data)
        setLibrary(
          res.data
      )
    })
  },[]);

  return (
    <div className="container">
        <div>
            {library.map(function(books) {
                return (
                    <div className="bookResult" key={books.id}>
                      <div className="row">
                        <div className="col-md-10">
                          <p>{books.title}</p>
                          <p>{books.authors}</p>
                        </div>
                        <div className="col-md-2">
                          <a href={books.link}> <button className="btn btn-info" href={books.link} target="_blank">View</button></a>
                          <button className="btn btn-succes">Delete</button>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <img src={books.image} alt={books.title} />
                        </div>
                        <div className="col-md-9">
                          <p>{books.description}</p>
                        </div>
                      </div>
                    </div>
                  );
            })}
        </div>
    </div>
  );
}

export default Saved;
