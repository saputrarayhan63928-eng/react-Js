import React from 'react'
import TodoItem from './TodoItem'


export default function TodoList({ todos, onToggle, onDelete }) {
if (!todos.length) return <p className="empty">Tidak ada tugas.</p>


return (
<ul className="todo-list">
{todos.map(todo => (
<TodoItem key={todo.id} todo={todo} onToggle={() => onToggle(todo.id)} onDelete={() => onDelete(todo.id)} />
))}
</ul>
)
}