// ToDo.js
import React from 'react';

export const ToDo = ({ ToDoItem, onDelete, toggleCompleted }) => {
  return (
    <div className="text-center" style={{ background: "linear-gradient(to right, #00d4ff, #bcff18)" }}>
      <h4 className="my-3">{ToDoItem.Title}</h4>
      <p className="my-3">{ToDoItem.Desc}</p>
      <button
        className={`btn btn-sm ${ToDoItem.completed ? 'btn-success' : 'btn-warning'}`}
        onClick={() => toggleCompleted(ToDoItem)} // Call toggleCompleted function
      >
        {ToDoItem.completed ? 'Completed' : 'Mark Completed'}
      </button>
      <button className="btn btn-sm btn-danger" onClick={() => onDelete(ToDoItem)}>Delete</button>
    </div>
  );
};
