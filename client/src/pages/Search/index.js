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

    const [tpying, setTyping] = useState({
        searchTerm: "",
    })

//  useEffect(function(search) {
//         API.googleSearch(search).then(function (results) {
//             console.log("results ========>", results.data.items)
//             setBooks({
//                 ...books,
//                 bookList: results.data.items,
//             });
//         });
//     }, []);

    const handleSave = function handleSave(bookData) {
        API.saveBook(bookData);
            console.log("bookData ======>", bookData)
            console.log("button clicked");
            setSaveBooks({
                ...saveBooks,
                savedBooks: bookData
            });
    }

    const handleTyping = function handleTyping(event) {
        event.preventDefault();
        setTyping({
            ...tpying,
            searchTerm: event.target.value
        })

    }
    
    const handleSubmit = function  handleSubmit() {
        API.googleSearch(tpying.searchTerm).then(function (results) {
            console.log("results ========>", results.data.items)
            setBooks({
                ...books,
                bookList: results.data.items,
            });
        });
    
    }

    return (
        <div>
        <Searchy handleSubmit={handleSubmit} handleTyping={handleTyping}/>
        <br />
        {books.bookList.length > 0 ? (<Main booky={books.bookList} handleSave={handleSave}/>) : ("")}
        </div>
    );
}

export default Search;