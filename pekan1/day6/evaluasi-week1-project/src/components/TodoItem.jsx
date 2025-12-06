import React from 'react'


export default function TodoItem({ todo, onToggle, onDelete }) {
const { text, completed } = todo


return (
<li className={`todo-item ${completed ? 'completed' : ''}`}>
<label className="todo-left">
<input type="checkbox" checked={completed} onChange={onToggle} />
<span className="todo-text" onClick={onToggle}>{text}</span>
</label>


<div className="todo-right">
<button className="btn-delete" onClick={onDelete} aria-label={`Hapus ${text}`}>
Hapus
</button>
</div>
</li>
)
}