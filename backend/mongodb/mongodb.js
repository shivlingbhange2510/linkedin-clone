const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost/linkedin`, () => {
    console.log("mongodb is running")
})

// mongoose.connect(`mongodb+srv://sarvar8950:Sarvar@12345@cluster0.e3h80.mongodb.net/linkedIn?retryWrites=true&w=majority`, () => {
//     console.log("mongodb is running")
// })

module.exports = mongoose