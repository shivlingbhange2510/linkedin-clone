const http = require('http')
const app = require('./app/app')
require('./mongodb/mongodb')
require('dotenv/config');

http.createServer(app).listen(process.env.PORT , () => console.log("server is running on localhost:8001"))