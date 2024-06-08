import React, { createContext, useState } from "react"

export const BookContext = createContext(null)

const BookContextProvider = (props) => {
    let [books, setBooks] = useState([])
    const addBook = (book) => {
        setBooks((prev)=>[...prev,book])
    }
    const contextValue = { books, addBook }
    return <BookContext.Provider value={contextValue}>{props.children}</BookContext.Provider>
}

export default BookContextProvider
