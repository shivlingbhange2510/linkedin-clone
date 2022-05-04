const jwtservice = require('./jwtmiddlware')

function isvalidtoken(req,res,next) {
    try {
        const token = req.headers.token
        const response = jwtservice.verifytoken(token)
        // console.log(response)
        next()
    } catch (error) {
        res.send(error)
    }
}

module.exports = isvalidtoken