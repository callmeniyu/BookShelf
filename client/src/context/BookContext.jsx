import React, { createContext, useEffect, useState } from "react"
import axios from "axios"

export const BookContext = createContext(null)

let id = 0

const BookContextProvider = (props) => {
    let [books, setBooks] = useState([])
    useEffect(() => {
        const allBooks = async () => {
            const response = await axios.get(`${import.meta.env.VITE_LOCAL_API}/allbooks`)
            const data = response.data
            setBooks(data)
        }
        allBooks()
    }, [])
    const addBook = async (book) => {
        // LOGIC FOR FORMING ID
        if (books.length > 0) {
            const lastBookArr = books.slice(-1)
            const lastBookId = lastBookArr[0].id
            book.id = lastBookId + 1  
        }else{
            book.id = 1
        }
        
        const response = await axios.post(`${import.meta.env.VITE_LOCAL_API}/addbook`, { book })
    }

    const removeBook = async(bookId) => {
        const response = await axios.post(`${import.meta.env.VITE_LOCAL_API}/removebook`, { bookId })
    }

    const contextValue = { books, addBook, removeBook }
    return <BookContext.Provider value={contextValue}>{props.children}</BookContext.Provider>
}

export default BookContextProvider
