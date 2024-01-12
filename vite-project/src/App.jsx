import { useState } from "react";
import "./style.css"

export default function App () {
  const [newItem, setNewItem] = useState("please add item")
  //setNewItem("")
const [toDos, setToDos] = useState([])
  function handleSubmit(e) {
    e.preventDefault();
    
    setToDos((currentToDos) => {
      return[
      ...toDos,
      {
        id: crypto.randomUUID(), title: newItem, completed:false },
      
    ]
  })
}
  
  //   setToDos((currentToDos) => {
  //     return[
  //     ...toDos,
  //     {
  //       id: crypto.randomUUID(), title: newItem, completed:false },
      
  //   ]
  // })

  console.log("==========list=====",toDos);
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem} onChange={e => setNewItem(e.target.value)}type="text" id="item"/>
        </div>   
        <button className="btn">Add</button>
        </form>
        
        <h1 className="header">Todo List</h1>
        <ul className="list">
          <li>
            <label>
              <input type="checkbox"></input>
              Item 1
            </label>
            <button className="btn btn-danger">Delete</button>
          </li>
          <li>
            <label>
              <input type="checkbox"></input>
              Item 2
            </label>
            <button className="btn btn-danger">Delete</button>
          </li>
          <li>
            <label>
              <input type="checkbox"></input>
              Item 3
            </label>
            <button className="btn btn-danger">Delete</button>
          </li>
        </ul>
      
    </>
  );
}