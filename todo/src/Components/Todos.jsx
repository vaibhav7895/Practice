import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [data, setData] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleClick = () => {
    setTodos([...todos, data]);
    setData("");
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo, index) => index !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = (id, newValue) => {
    const updatedTodos = todos.map((todo, index) =>
      index === id ? newValue : todo
    );
    setTodos(updatedTodos);
  };

  useEffect(() => {
    setFilteredData(todos);
  }, [todos]);

  

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter a task"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>

      <TodoList todos={filteredData} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  );
};

export default Todo;
