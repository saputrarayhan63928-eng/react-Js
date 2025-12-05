import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;

    const newItem = {
      id: Date.now(), 
      text: newTodo,
      completed: false
    };

    setTodos(prev => [...prev, newItem]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "300px" }}>
      <h2>Todo List</h2>

      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Tambahkan tugas..."
      />

      <button onClick={addTodo} style={{ marginLeft: "10px" }}>
        Tambah
      </button>

      <ul style={{ padding: 0 }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              listStyle: "none",
              display: "flex",
              marginTop: "10px",
              alignItems: "center"
            }}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                cursor: "pointer",
                flex: 1,
                textDecoration: todo.completed ? "line-through" : "none"
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: "8px" }}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
