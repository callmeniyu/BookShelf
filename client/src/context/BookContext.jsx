import React, { createContext, useState } from "react"

export const BookContext = createContext(null)

let id = 0;

const BookContextProvider = (props) => {
    let [books, setBooks] = useState([])
    const addBook = (book) => {
        id++;
        book.id = id
        setBooks((prev) => [...prev, book])
    }
    const contextValue = { books, addBook }
    return <BookContext.Provider value={contextValue}>{props.children}</BookContext.Provider>
}

export default BookContextProvider
