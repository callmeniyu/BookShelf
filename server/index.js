import express from "express"
import bodyParser from "body-parser"
import multer from "multer"
import cors from "cors"
import path from "path"
import mongoose from "mongoose"

const port = 4000
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get("/", (req, res) => {
    res.send("Working")
})

// MULTER STORAGE ENGINE
const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })

// UPLOAD ENDPOINT FOR IMAGE
app.use("/images", express.static("upload/images"))
app.post("/upload", upload.single("book"), (req, res) => {
    res.json({
        success: true,
        img_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})


app.listen(port, () => {
    console.log(`Port Running on http://localhost:${port}`)
})