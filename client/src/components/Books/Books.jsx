import React from "react"
import { Link } from "react-router-dom"
import Book_Cover1 from "../../assets/images/Book_Cover1.png"
import "./Books.css"

const Books = (props) => {
    return (
        <div className="books">
            <div className="books-wrap">
                <div className="books-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ulpa qui
                    officia deserunt mollit anim id est laborum.
                </div>
                <div className="books-right">
                    <div>
                        <div className="books-details">
                            <h1>Psychology of Money</h1>
                            <h2>Morgan Housel</h2>
                            <p>18/12/2002 Wednesday</p>
                            <p>ISBN:123456789</p>
                            <p>10/10</p>
                        </div>

                        <div className="books-details-btns">
                            <Link className="readmore-btn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msFilter: "" }}
                                >
                                    <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                                    <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                                </svg>{" "}
                                Read more
                            </Link>
                            <Link className="buy-online-btn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    style={{ fill: "rgba(255, 255, 255, 1)", transform: "", msFilter: "" }}
                                >
                                    <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
                                    <circle cx="10.5" cy="19.5" r="1.5"></circle>
                                    <circle cx="17.5" cy="19.5" r="1.5"></circle>
                                </svg>{" "}
                                Buy Online
                            </Link>
                        </div>
                    </div>
                    <img src={Book_Cover1} className="book-cover-img" alt="book-cvr-img" />
                </div>
            </div>
        </div>
    )
}

export default Books
