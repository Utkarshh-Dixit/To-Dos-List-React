// App.js
import './App.css';
import Header from './myComponents/Header';
import React, { useState, useEffect } from 'react';
import { Footer } from './myComponents/Footer';
import { About } from './myComponents/About';
import { AddTodo } from './myComponents/AddTodo';
import { ToDos } from './myComponents/ToDos';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [ToDoItem, setToDoItem] = useState([]);

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("ToDoItem"));
    if (savedTasks) {
      setToDoItem(savedTasks);
    }
  }, []);

  const onDelete = (task) => {
    console.log("Delete is called", task);
    const updatedTasks = ToDoItem.filter((item) => item.sno !== task.sno);
    setToDoItem(updatedTasks);
    localStorage.setItem("ToDoItem", JSON.stringify(updatedTasks));
  };

  const toggleCompleted = (task) => {
    const updatedTasks = ToDoItem.map((item) => {
      if (item.sno === task.sno) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setToDoItem(updatedTasks);
    localStorage.setItem("ToDoItem", JSON.stringify(updatedTasks));
  };

  const addToDo = (Title, Desc) => {
    console.log("Added a todo", Title, Desc);

    const newTask = {
      sno: ToDoItem.length === 0 ? 1 : ToDoItem[ToDoItem.length - 1].sno + 1,
      Title: Title,
      Desc: Desc,
      completed: false, // Initialize new task as not completed
    };

    setToDoItem([...ToDoItem, newTask]);
    localStorage.setItem("ToDoItem", JSON.stringify([...ToDoItem, newTask]));
  };

  return (
    <>
      <Router>
        <Header title="ToDoList_Utkarsh" />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<><AddTodo addToDo={addToDo} />
            <ToDos ToDoItem={ToDoItem} onDelete={onDelete} toggleCompleted={toggleCompleted} /></>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
