import React, { createContext } from "react"

export const BookContext = createContext(null)

const BookContextProvider = (props) => {
    let books = []
    let id
    const addBook = (book) => {
        if (book._id > 0) {
            book._id += 1
        } else {
            book._id = 1
        }
        books.push(book)
    }
    const contextValue = { books, addBook }
    return <BookContext.Provider value={contextValue}>{props.children}</BookContext.Provider>
}

export default BookContextProvider
