import React, { createContext, useState } from "react"
import axios from "axios"

export const BookContext = createContext(null)

let id = 0

const BookContextProvider = (props) => {
    let [books, setBooks] = useState([])
    const addBook = async (book) => {
        id++
        book.id = id
        console.log(`context: ${import.meta.env.VITE_LOCAL_API}/addbook`)
        const response = await axios.post(`${import.meta.env.VITE_LOCAL_API}/addbook`, { book })
        const data = response.data
        alert(data.message)
    }
    const contextValue = { books, addBook }
    return <BookContext.Provider value={contextValue}>{props.children}</BookContext.Provider>
}

export default BookContextProvider
