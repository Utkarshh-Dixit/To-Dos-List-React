
import './App.css';
import Header from './myComponents/Header';
import React, {useState, useEffect} from 'react';
import {Footer} from './myComponents/Footer';
import {About} from './myComponents/About';
import {AddTodo} from './myComponents/AddTodo';
import {ToDos} from './myComponents/ToDos';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  
  const onDelete=(ToDoI)=>{
    console.log("Delete is called", ToDoI);
    setToDoItem(ToDoItem.filter((e)=>{
      return e!==ToDoI;
    }))
    localStorage.setItem("ToDoI", JSON.stringify(ToDoI))
  }

  const addToDo = (Title,Desc) =>{
    console.log("Added a todo",Title,Desc);

    let sno = ToDoItem.length === 0 ? 1 : ToDoItem[ToDoItem.length-1].sno + 1;
    const myToDo = {
      sno: sno,
      Title: Title,
      Desc: Desc,
    }
    setToDoItem([...ToDoItem, myToDo]);
    console.log(myToDo);

   
    
      
  }
  const [ToDoItem, setToDoItem] = useState([]) 
  useEffect(() => {
    localStorage.setItem("ToDoItem", JSON.stringify(ToDoItem));
  
   
  }, [ToDoItem])
  return (
    <>
    <Router>
     <Header title="ToDoList_Utkarsh"/>
     <Routes>
          <Route path="/about" element={<About />}>
            
          </Route>
          <Route path="/" element={<><AddTodo addToDo={addToDo}/>
     <ToDos ToDoItem={ToDoItem} onDelete={onDelete}/></>}>
          
          </Route>
        </Routes>
     
     <Footer/>
     </Router>
     </>
  );
}

export default App;
