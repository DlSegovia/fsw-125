const express = require('express')
const bountyRouter = express.Router()
const { uuid } = require("uuidv4")

const bounties = [
    { title: "Kit Fisto", 
    living: "true", 
    bountyAmount: "5000", 
    type: "Jedi", _id: uuid() },
    { title: "Eeth Koth", 
    living: "true", 
    bountyAmount: "5000", 
    type: "Jedi", _id: uuid() },
    { title: "Barriss Offee", 
    living: "true", 
    bountyAmount: "5000", 
    type: "Jedi", _id: uuid() },
    { title: "Shaak Ti", 
    living: "false", 
    bountyAmount: "5000", 
    type: "Jedi", _id: uuid() },
    { title: "Aayla Secura", 
    living: "true", 
    bountyAmount: "5000", 
    type: "Jedi", _id: uuid() },

    { title: "Marka Ragnos", 
    living: "false", 
    bountyAmount: "500", 
    type: "Sith", _id: uuid() },
    { title: "Darth Nihilus", 
    living: "false", 
    bountyAmount: "300", 
    type: "Sith", _id: uuid() },
    { title: "Darth Bane", 
    living: "true", 
    bountyAmount: "1500", 
    type: "Sith", _id: uuid() },
    { title: "Darth Sidious", 
    living: "true", 
    bountyAmount: "3500", 
    type: "Sith", _id: uuid() },
    { title: "Darth Traya", 
    living: "true", 
    bountyAmount: "750", 
    type: "Sith", _id: uuid() }
]

bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

bountyRouter.post("/", (reg, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send("Successfully added ${newBounty.title} to the database")
})


module.exports = bountyRouter