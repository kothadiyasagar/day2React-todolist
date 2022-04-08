import { useState } from "react";
import{nanoid} from 'nanoid'
import Todoitem from "./todoitem"
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
        <input type={"text"} value={task} placeholder="enter" onChange={handal}></input>
        <button onClick={handclick}>+</button>
        {todo.map(item=>{
            return <Todoitem key={item.id} data={item}/>
        })}
        </>
    )
}
export default TodoList