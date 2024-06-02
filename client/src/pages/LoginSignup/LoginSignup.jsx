import React from "react"
import "./LoginSignup.css"

const LoginSignup = () => {
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h3>new book</h3>
                <form className="loginsignup-form"action="">
                    <div className="loginsignup-name">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="loginsignup-name-field"  name="name" id="name" placeholder="Enter name of your book"/>
                    </div>
                    <div className="loginsignup-author">
                      <label htmlFor="author">Author</label>
                      <input type="text" className="loginsignup-author-field" name="author" id="author" placeholder="Enter name of the auther"/>
                    </div>
                    <div className="loginsignup-isbn">
                      <label htmlFor="rating">ISBN</label>
                      <input type="text" className="loginsignup-isbn-field" name="isbn" id="isbn" placeholder="Enter isbn of your book"/>
                    </div>
                    <div className="loginsignup-date">
                      <label htmlFor="date">Date</label>
                      <input type="date" className="loginsignup-date-field" name="date" id="date" placeholder="Select date you read the book"/>
                    </div>
                    <div className="loginsignup-rating">
                      <label htmlFor="rating">Rating</label>
                      <select className="loginsignup-rating-field">
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
                      <input type="text" className="loginsignup-link-field" name="link" id="link" placeholder="Provide link to the online store"/>
                    </div>
                    <div className="loginsignup-summary">
                      <label htmlFor="summary">Summary</label>
                      <textarea className="loginsignup-summary-field" name="summary" id="summary" placeholder="Give the summary of the book."></textarea>
                    </div>
                    <div className="loginsignup-notes">
                      <label htmlFor="notes">Notes</label>
                      <textarea className="loginsignup-notes-field" name="notes" id="notes" placeholder="Describe your learnings from the book"></textarea>
                    </div>
            <button type="submit" className="loginsignup-submit-btn">Submit</button>
          </form>
            </div>
        </div>
    )
}

export default LoginSignup
