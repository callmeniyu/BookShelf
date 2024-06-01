import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import "./App.css"
import LoginSignup from "./pages/LoginSignup/LoginSignup"
import Book from "./pages/Book/Book"

function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/book" element={<Book />}>
                    <Route path=":id" element={<Book />} />
                </Route>
                <Route path="/login" element={<LoginSignup />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
