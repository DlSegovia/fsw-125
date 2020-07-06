const express = require("express")
const app = express()

app.use(express.json())


app.use("/bounty", require('./bountyRouter.js'));



app.listen(5000, () => {
    console.log("The server is running on Port 5000")
})