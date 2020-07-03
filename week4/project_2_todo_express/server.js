const express = require('express')
const app = express()

app.use(express.json())


app.use("/todos", require("./routes/todoRouter.js"))



app.listen(9000, () => {
    console.log('Server is listening to Port 9000')
})