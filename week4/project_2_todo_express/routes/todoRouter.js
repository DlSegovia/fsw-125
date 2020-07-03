const express = require('express')
const todoRouter = express.Router()
const {v4:uuidv4} = require("uuid")
// const {uuid} = require("uuidv4")

const todos = [
    {
        name: '',
        description: '',
        imageURL: '',
        completed: '',
        _id: uuidv4()

    }
]

// Get All
todoRouter.get("/", (req, res) => {
    res.send(todos)
})

// Get One
todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTODO = todos.find(todo => todo._id === todoId)
    res.send(foundTODO)
})

// Get by TODO Object
todoRouter.get("/search/description", (req, res) => {
    const living = req.query.description
    const filteredtodos = todos.filter(todo => todo.description === description)
    res.send(filteredtodos)
})

// Post One
todoRouter.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid()
    todos.push(newTodo)
    res.send("Successfully added ${newTodo.name} to the database")
})

// Update One
todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTODO = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTODO)
})

// Delete One
todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted TODO!")
})


module.exports = todoRouter