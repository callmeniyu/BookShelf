import React, { useState } from "react"
import google_icon from "../../assets/google_icon.svg"
import "./LoginSignup.css"
import { Link } from "react-router-dom"
const LoginSignup = () => {
    const [state, setState] = useState("Login")
    const [checked, setChecked] = useState(true)
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const login = () => {}
    const signup = () => {}
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "Signup" && (
                        <input
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            type="text"
                            placeholder="Your Name"
                        />
                    )}
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email Address"
                    />
                    <input
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <button disabled={checked} onClick={() => (state === "Login" ? login() : signup())}>
                    Continue
                </button>
                {state === "Signup" ? (
                    <p className="loginsignup-login" onClick={() => setState("Login")}>
                        Already have an account? <span>Login here</span>
                    </p>
                ) : (
                    <p className="loginsignup-login" onClick={() => setState("Signup")}>
                        Create new account? <span>Click here</span>
                    </p>
                )}
                <div className="loginsignup-agree">
                    <input type="checkbox" onChange={() => setChecked((prev) => !prev)} />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
            <div className="loginsignup-google">
                <span><hr/>OR<hr/></span>
                <div className="loginsignup-google-container">
                    <Link className="loginsignup-google-ggl">
                        <img src={google_icon} alt="" />
                        <h4>Sign up using Google</h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup
