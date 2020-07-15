const express = require("express")
const app = express()
// const morgan = require("morgan")

// Middleware (for every request)
app.use(express.json())// Looks for a request body, and turns it into 'req.body'
// app.use(morgan('dev'))// Logs request to the console

// Routes
app.use("/bounties", require('./routes/bountyRouter.js'));


// Server Listen
app.listen(7000, () => {
    console.log("The server is running on Port 7000")
})