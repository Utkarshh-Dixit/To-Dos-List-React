import React from 'react'
import {ToDo} from '../myComponents/ToDo';
export const ToDos = (props) => {
  return (
    
    <div className="text-center">
        <h1 className="text-center my-3">To Do's</h1>
        {props.ToDoItem.length === 0 ? "No ToDo to Display" : 
        props.ToDoItem.map((ToDoItem)=>{
            return <><ToDo ToDoItem={ToDoItem} key={ToDoItem.sno} onDelete={props.onDelete}/><hr/></>
        })}
       
    </div>
  )
}
