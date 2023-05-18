const express = require ('express')
const Todo = require('./todoModel')

const router = express.Router()

router.get('/', async (req,res)=>{
    try {
        const todos = await Todo.find()
        res.json(todos)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.post('/', async (req,res)=>{
    const todo = new Todo ({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed
    })
    try {
        const newTodo = await todo.save()
        res.status (201).json(newTodo)
    } catch (err) {
    res.status(400).json({message: err.message})
    }
})

router.patch('/:id',async (req,res)=>{
    try {
        const todo = await Todo.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.json(todo)
    } catch (err) {
        res.status(400)({ message: err.message})
    }
})

router.delete('/:id', async (req,res)=>{
    try {
        await Todo.findByIdAndDelete(req.params.id)
        res.json({message: 'TODO Deleted'})
    } catch (err) {
        res.status(500).json ({message: err.message})
    }
})

module.exports = router