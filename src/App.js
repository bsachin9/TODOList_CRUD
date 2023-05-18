import React, { useState, useEffect } from 'react'
import TodoList from './components/ToDoList'
import AddTodo from './components/AddToDo'
import axios from 'axios'

function App() {
const [todos, setTodos] = useState([])

useEffect(() => {
    const fetchTodos = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/todos')
        setTodos(response.data)
    } catch (error) {
        console.error('Error fetching todos:', error)
    }
    }
    fetchTodos()
},[])


return (
    <div className='App'>
    <h1>Todo List</h1>
    <AddTodo setTodos={setTodos} todos={todos} />
    <TodoList todos={todos} setTodos={setTodos} />
    </div>
)}

export default App
