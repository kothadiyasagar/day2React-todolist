import { useState } from "react";
import{nanoid} from 'nanoid'
import Todoitem from "./todoitem"
import './todo.css'
const TodoList =()=>{
   const[task,setTask]=useState("")
   const[todo,setTodo]=useState([])
   const handal=(e)=>{
      setTask(e.target.value)
   }
   const handclick=()=>{
       let payload={
           id:nanoid(),
           title:task,
           status:false
       }
       setTodo([payload,...todo])
   }

    return (
        <>
        <input className="b" type={"text"} value={task} placeholder="Write something" onChange={handal}></input>
        <button className="c" onClick={handclick}>+</button>
        {todo.map(item=>{
            return <Todoitem key={item.id} data={item}/>
        })}
        </>
    )
}
export default TodoList