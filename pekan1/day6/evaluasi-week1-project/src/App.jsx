import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'


export default function App() {
const [todos, setTodos] = useState([])
const [filter, setFilter] = useState('all') 


const addTodo = (text) => {
if (!text || !text.trim()) return
const newTodo = {
id: Date.now(),
text: text.trim(),
completed: false
}
setTodos(prev => [...prev, newTodo])
}


const toggleTodo = (id) => {
setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
}


const deleteTodo = (id) => {
setTodos(prev => prev.filter(t => t.id !== id))
}


const clearCompleted = () => {
setTodos(prev => prev.filter(t => !t.completed))
}


const changeFilter = (next) => setFilter(next)


const filtered = todos.filter(t => {
if (filter === 'active') return !t.completed
if (filter === 'completed') return t.completed
return true
})


return (
<div className="app-container">
<div className="todo-card">
<h1 className="title">Todo List</h1>


<TodoForm onAdd={addTodo} />


<TodoFilter current={filter} onChange={changeFilter} onClearCompleted={clearCompleted} countActive={todos.filter(t => !t.completed).length} />


<TodoList todos={filtered} onToggle={toggleTodo} onDelete={deleteTodo} />


<div className="meta">
<span>{todos.length} total</span>
<span>{todos.filter(t => !t.completed).length} active</span>
</div>
</div>
</div>
)
}