const express = require('express')
const controller = require("../controller/controller")
const bodyparser = require('body-parser')
const multer = require('multer');
const path = require('path')
const cors = require('cors')

const diskstorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname,'..',"images"))
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split("/")[1]
        cb(null, `${Date.now()}.${ext}`)
    }
})

const upload = multer({
    storage: diskstorage
})

const app = express()

app.use(cors())
app.use(bodyparser.json())

app.get('/', controller.home)

app.post('/register' , controller.register)
app.post('/login' , controller.login)
app.post('/saveimg', upload.single('file'), controller.saveimg)
app.get('/networkdata' , controller.networkdata)

module.exports = app