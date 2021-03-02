import React, { useState, useEffect } from "react";
import Searchy from "../../components/Searchy/index";
import Main from "../../components/Main/index";
import API from "../../utils/API";

function Search (props) {

    const [books, setBooks] = useState({
        bookList: []
    })

    useEffect(function() {
        API.googleSearch().then(function (results) {
            console.log("results ========>", results.data.items)
            setBooks({
                ...books,
                bookList: results.data.items,
            });
        });
    }, []);



    return (
        <div>
        <Searchy />
        <Main booky={books.bookList}/>
        </div>
    );
}

export default Search;