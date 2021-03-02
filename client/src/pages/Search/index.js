import React, { useState, useEffect } from "react";
import Searchy from "../../components/Searchy/index";
import Main from "../../components/Main/index";
import API from "../../utils/API";

function Search (props) {

    const [books, setBooks] = useState({
        bookList: [],
    })

    const [saveBooks, setSaveBooks] = useState({
        savedBooks: [],
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

    const handleSave = function handleSave(bookData) {
        API.saveBook(bookData);
            console.log("bookData ======>", bookData)
            console.log("button clicked");
            setSaveBooks({
                ...saveBooks,
                savedBooks: bookData
            });
    }



    return (
        <div>
        <Searchy />
        <Main booky={books.bookList} handleSave={handleSave}/>
        </div>
    );
}

export default Search;