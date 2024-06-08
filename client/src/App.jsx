import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Addbook from "./pages/Addbook/Addbook"
import Book from "./pages/Book/Book"
import "./App.css"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/book" element={<Book />}>
                    <Route path=":bookId" element={<Book />} />
                </Route>
                <Route path="/addbook" element={<Addbook />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
