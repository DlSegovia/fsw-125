const express = require("express")
// const morgan = require ('morgan')
const app = express()

app.use(express.json())
// app.use(morgan('dev'))
app.use("/bounties", require("./routes/bountyRouter.js"))

app.listen(5000, () => {
    console.log("Server is listening on port: 5000");
});