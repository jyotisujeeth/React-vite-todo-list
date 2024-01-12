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

  setNewItem("");

}
  function toggleTodo(id, completed) {
    setToDos((currentToDos) => {
      return currentToDos.map(todo =>{
        if(todo.id === id) {
          // todo.completed = completed
          return {...todo, completed}
        }

        return todo;
        })
      })
  }

  function deleteTodo(id) {
  setToDos(currentTodos => {
    return currentToDos.filter(todo.id !=== id);
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
          {toDos.length === 0 && "No todolist" }
          {toDos.map(todo => {
          return (
          <li key ={todo.id}> 
            <label>
            <input type="checkbox" checked={todo.completed} 
            onChange={e => toggleTodo(todo.id, e.target.checked)}/>
            {todo.title}
          </label>
          <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
          </li>
          )
          })}
        </ul>
      
    </>

  );
}
