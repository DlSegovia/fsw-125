const express = require("express")
const cors = require ('cors')
const app = express()

app.use(express.json())
app.use(cors)

app.use("/bounties", require("./routes/bountyRouter.js"))

app.listen(5000, () => {
    console.log("Server is listening on port: 5000");
});