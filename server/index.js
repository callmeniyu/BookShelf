import express from "express"
import bodyParser from "body-parser"
import ejs from "ejs"
import pg from "pg"

const app = express()
const port = 3000

app.set("views", "../views")
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("../public"))

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}/`))
