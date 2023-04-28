import React, {useState} from 'react'

export const AddTodo = (props) => {
    const [Title, setTitle] = useState("");
    const [Desc, setDesc] = useState("");
    const submit = (e) =>{
         e.preventDefault();
         if(!Title || !Desc){
            alert("Title or Description not found");
         }
         props.addToDo(Title, Desc);
         setTitle("");
         setDesc("");
    }
  return (
    <div className="container my-3">
        <h3 className="text-center">Add a ToDo</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
            <label htmlFor="title" className="form-label">Enter your title here</label>
            <input type="text" value={Title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
            <label htmlFor="desc" className="form-label">ToDo Description</label>
            <input type="text" value={Desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
            </div>
            
            <button type="submit" className="btn btn-sm btn-success btn btn-primary">Add ToDo</button>
        </form>
    </div>
  )
}
