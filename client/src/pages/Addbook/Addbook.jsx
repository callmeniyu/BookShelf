import React, { useContext, useState } from "react"
import "./Addbook.css"
import Footer from "../../components/Footer/Footer"
import upload_area from "../../assets/upload_area.svg"
import { BookContext } from "../../context/BookContext"
import { Link } from "react-router-dom"

const LoginSignup = () => {
    const [image, setImage] = useState(false)
    const { addBook } = useContext(BookContext)

    const [formData, setFormData] = useState({
        id: Date.now(),
        name: "",
        author: "",
        isbn: "",
        date: "",
        rating: "",
        link: "",
        summary: "",
        notes: "",
        img: "",
    })

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const submitBook = (e) => {
        addBook(formData)
    }

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h3>new book</h3>
                <form className="loginsignup-form">
                    <div className="loginsignup-name">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="loginsignup-name-field"
                            onChange={handleChange}
                            name="name"
                            id="name"
                            placeholder="Enter name of your book"
                        />
                    </div>
                    <div className="loginsignup-author">
                        <label htmlFor="author">Author</label>
                        <input
                            type="text"
                            className="loginsignup-author-field"
                            onChange={handleChange}
                            name="author"
                            id="author"
                            placeholder="Enter name of the auther"
                        />
                    </div>
                    <div className="loginsignup-isbn">
                        <label htmlFor="rating">ISBN</label>
                        <input
                            type="text"
                            className="loginsignup-isbn-field"
                            onChange={handleChange}
                            name="isbn"
                            id="isbn"
                            placeholder="Enter isbn of your book"
                        />
                    </div>
                    <div className="loginsignup-date">
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            className="loginsignup-date-field"
                            onChange={handleChange}
                            name="date"
                            id="date"
                        />
                    </div>
                    <div className="loginsignup-rating">
                        <label htmlFor="rating">Rating</label>
                        <select className="loginsignup-rating-field" name="rating" onChange={handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div className="loginsignup-link">
                        <label htmlFor="link">link</label>
                        <input
                            type="text"
                            className="loginsignup-link-field"
                            onChange={handleChange}
                            name="link"
                            id="link"
                            placeholder="Provide link to the online store"
                        />
                    </div>
                    <div className="loginsignup-summary">
                        <label htmlFor="summary">Summary</label>
                        <textarea
                            className="loginsignup-summary-field"
                            onChange={handleChange}
                            name="summary"
                            id="summary"
                            placeholder="Give the summary of the book."
                        ></textarea>
                    </div>
                    <div className="loginsignup-notes">
                        <label htmlFor="notes">Notes</label>
                        <textarea
                            className="loginsignup-notes-field"
                            onChange={handleChange}
                            name="notes"
                            id="notes"
                            placeholder="Describe your learnings from the book"
                        ></textarea>
                    </div>
                    <div className="loginsignup-img-field">
                        <label htmlFor="file-input">
                            <img
                                src={image ? URL.createObjectURL(image) : upload_area}
                                className="loginsignup-img"
                                alt=""
                            />
                        </label>
                        <input type="file" onChange={handleImage} name="image" id="file-input" hidden />
                    </div>
                    <Link to="/" className="loginsignup-submit-btn" onClick={() => submitBook()}>
                        Submit
                    </Link>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default LoginSignup