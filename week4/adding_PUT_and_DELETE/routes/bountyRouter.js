const express = require('express')
const bountyRouter = express.Router()
const { uuid } = require("uuidv4")

const bounties = [
    {
        title: "Kit Fisto",
        living: "true",
        bountyAmount: "5000",
        type: "Jedi", _id: uuid()
    },

    {
        title: "Eeth Koth",
        living: "true",
        bountyAmount: "5000",
        type: "Jedi", _id: uuid()
    },

    {
        title: "Barriss Offee",
        living: "true",
        bountyAmount: "5000",
        type: "Jedi", _id: uuid()
    },

    {
        title: "Shaak Ti",
        living: "false",
        bountyAmount: "5000",
        type: "Jedi", _id: uuid()
    },

    {
        title: "Aayla Secura",
        living: "true",
        bountyAmount: "5000",
        type: "Jedi", _id: uuid()
    },

    {
        title: "Marka Ragnos",
        living: "false",
        bountyAmount: "500",
        type: "Sith", _id: uuid()
    },

    {
        title: "Darth Nihilus",
        living: "false",
        bountyAmount: "300",
        type: "Sith", _id: uuid()
    },

    {
        title: "Darth Bane",
        living: "true",
        bountyAmount: "1500",
        type: "Sith", _id: uuid()
    },

    {
        title: "Darth Sidious",
        living: "true",
        bountyAmount: "3500",
        type: "Sith", _id: uuid()
    },

    {
        title: "Darth Traya",
        living: "true",
        bountyAmount: "750",
        type: "Sith", _id: uuid()
    }
]

// Get All
bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

// Get One
bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

// Get by Bounty Object
bountyRouter.get("/search/living", (req, res) => {
    const living = req.query.living
    const filteredbounties = bounties.filter(bounty => bounty.living === living)
    res.send(filteredbounties)
})

// Post One
bountyRouter.post("/", (reg, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send("Successfully added ${newBounty.title} to the database")
})

// Update One
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})

// Delete One
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted Bounty!")
})


module.exports = bountyRouter