import React from 'react'
import TodoItem from "./TodoItem.js";

const Todos = (props) => {
  return (
    <div className="container">
      {props.todos.length!==0? <h3 className="fw-bold fs-1 text-secondary">Todos List </h3>:
      <h3 className="fw-bold fs-1 text-secondary"></h3>
      }
      
      {props.todos.length===0? <h2 className='text-danger fw-bold fs-1 p-10 text-center mt-5'>No Todos To Display</h2>:
      props.todos.map((todo)=>{
        return(
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        ) 
        
     })}
      
    </div>
  )
}

export default Todos


