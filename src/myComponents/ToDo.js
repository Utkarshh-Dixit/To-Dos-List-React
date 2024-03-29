import React from 'react'

export const ToDo = ({ToDoItem, onDelete}) => {
  return (
    <div className="text-center " style={{background: "linear-gradient(to right, #00d4ff, #bcff18)"}}>
        <h4 className="my-3">{ToDoItem.Title}</h4>
        <p className="my-3">{ToDoItem.Desc}</p>
        <button className="btn btn-sm btn-danger" onClick={ ()=> {onDelete(ToDoItem)}}>Delete</button>
    </div>
  )
}
