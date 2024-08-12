import React, { useState } from "react";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const startEditing = (id) => {
    setEditIndex(id);
    setEditValue(todos[id]);
    
  };

  const saveEdit = (id) => {
    handleEdit(id, editValue);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div>
      {todos.map((item, id) => (
        <div key={id}>
          {editIndex === id ? (
            <>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button onClick={() => saveEdit(id)}>Save</button>
            </>
          ) : (
            <>
              <p>{item}</p>
              <button onClick={() => startEditing(id)}>Edit</button>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
