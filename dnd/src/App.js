import React,{useState} from "react"
import './App.css';

function App() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);
  const [draggingIndex,setDraggingindex]=useState(null)

  const handleDragStart = (index) => {
    setDraggingindex(index);
  }

  const handleDragOver = (index) => {
    if (draggingIndex === null || draggingIndex === index) return;

    const updatedItems = [...items];
    const draggedItem = updatedItems.splice(draggingIndex, 1)[0];
    updatedItems.splice(index, 0, draggedItem);

    setDraggingindex(index);
    setItems(updatedItems);
  }
  const handleDragEnd = () => {
    setDraggingindex(null);
  }
  return (
    <div className="App">
      <ul>
        {items.map((item,index)=>(
          <li key={index} style={{
            padding: "8px",
            margin: "4px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            cursor: "move",
          }}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={()=>handleDragOver(index)}
          onDrop={handleDragEnd}
          >{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
