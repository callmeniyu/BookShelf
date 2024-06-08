import express from "express"
import bodyParser from "body-parser"
import multer from "multer"
import cors from "cors"
import path from "path"
import dotenv from "dotenv"
import mongoose from "mongoose"

const port = 4000
const app = express()
dotenv.config()


mongoose.connect(process.env.MONGO_URL)
    .then(console.log("Connected to DB"))
    .catch((err) => console.log(err))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const Book = mongoose.model("Book",{
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    isbn: {
        type: Number,
        unique: true,
    },
    date: {
        type: String,
    },
    rating: {
        type: Number
    },
    link: {
        type: String
    },
    summary: {
        type: String
    },
    notes: {
        type:String
    },
    img: {
        type:String
    },
})

const User = mongoose.model("User", {
    username: {
        type:String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
})

app.get("/", (req, res) => {
    res.send("Working")
})
app.post("/addbook", async(req, res) => {
    const newBook = new Book({
        id:req.body.id,
        name:req.body.name,
        author:req.body.author,
        isbn:req.body.isbn,
        date:req.body.date,
        rating:req.body.rating,
        link:req.body.link,
        summary:req.body.summary,
        notes:req.body.notes,
        img:req.body.img,
    })
    await newBook.save()
    res.json({success:"true"})
    console.log("Saved new book")
})

// MULTER STORAGE ENGINE
const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    },
})

const upload = multer({ storage: storage })

// UPLOAD ENDPOINT FOR IMAGE
app.use("/images", express.static("upload/images"))
app.post("/upload", upload.single("book"), (req, res) => {
    res.json({
        success: true,
        img_url: `http://localhost:${port}/images/${req.file.filename}`,
    })
})

app.listen(port, () => {
    console.log(`Port Running on http://localhost:${port}`)
})
