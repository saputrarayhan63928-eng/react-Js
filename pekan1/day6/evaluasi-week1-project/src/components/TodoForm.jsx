import React, { useState } from 'react'


export default function TodoForm({ onAdd }) {
const [value, setValue] = useState('')


const submit = (e) => {
e.preventDefault()
if (!value.trim()) return
onAdd(value)
setValue('')
}


return (
<form className="todo-form" onSubmit={submit}>
<input
className="input"
placeholder="Tambahkan tugas..."
value={value}
onChange={e => setValue(e.target.value)}
/>
<button type="submit" className="btn-inline">Tambah</button>
</form>
)
}