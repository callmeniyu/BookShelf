import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    const [menuToggler, setMenuToggler] = useState(false)
    return (
        <div className="navbar">
            <div className="nav-logo">
                <h3>
                    book <span className="navlogo-span">shelf</span>
                </h3>
            </div>
            <ul className={`nav-items ${menuToggler && "nav-toggle-on"}`}>
                <li>
                    <Link className="nav-about">About</Link>
                </li>
                <li>
                    <Link className="nav-contact">Contact</Link>
                </li>
                <li>
                    <Link className="nav-sortby">
                        Sort By
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 sort-icon"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </Link>
                </li>
                <li>
                    <input type="text" className="search-book" placeholder="search book" />
                </li>
            </ul>
            <div></div>
            <svg
                onClick={() => setMenuToggler((prev) => !prev)}
                className={`nav-menu-icon `}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: " rgba(0, 0, 0, 1)", transform: "", msFilter: "" }}
            >
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
        </div>
    )
}

export default Navbar
