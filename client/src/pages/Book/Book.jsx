import React from "react"
import { Link } from "react-router-dom"
import Book_Cover1 from "../../assets/images/Book_Cover1.png"
import "./Book.css"
import Footer from "../../components/Footer/Footer"
const Book = () => {
    return (
        <div className="book">
            <div className="book-wrap">
                <div>
                    <div className="book-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in ulpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="book-right">
                        <div>
                            <div className="book-details">
                                <h1>Psychology of Money</h1>
                                <h2>Morgan Housel</h2>
                                <p>18/12/2002 Wednesday</p>
                                <p>ISBN:123456789</p>
                                <p>10/10</p>
                            </div>

                            <div className="book-details-btns">
                                <Link className="book-edit-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msFilter: "" }}><path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path><path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path></svg>
                                    Edit Book
                                </Link>
                                <Link className="buy-online-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(255, 255, 255, 1)", transform: "", msFilter: "" }}><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg>
                                    Remove Book
                                </Link>
                            </div>
                        </div>
                        <img src={Book_Cover1} className="book-cover-img" alt="book-cvr-img" />
                    </div>
                </div>
                <hr />
                <div className="book-notes">
                    <h3>my notes </h3>
                    <div className="book-notes-list">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ulpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <hr />
                    <Link to="/" type="submit" className="backto-home-btn">Back to Home</Link>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Book
