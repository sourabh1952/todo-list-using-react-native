import './App.css';
import Header from "./Components/Header";
import About from "./Components/About";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import React, { useState,useEffect } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete=(todo)=>{
    console.log("i am on delte" , todo)

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo=(title,desc)=>{
      console.log("i am adding the todo" ,title,desc)
      let sno;
      if(todos.length===0){sno=0;}
      else{sno=todos[todos.length-1].sno+1;}
      const Mytodos={
        sno:sno,
        title:title,
        desc:desc,
      }
      setTodos([...todos,Mytodos]);
      console.log(Mytodos);

      
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
    },[todos])

  return (
    <BrowserRouter>
    <Header title="my todos list" searchbar={true}/>
    
    <Routes>
      <Route path="addtodo" element={<AddTodo addTodo={addTodo}/>}/>
      <Route path="about" element ={<About/>}/>
      <Route path="showtodo" element={<Todos todos={todos} onDelete={onDelete}/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
