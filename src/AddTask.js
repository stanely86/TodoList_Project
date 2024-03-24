import React from "react"

export default function AddTask(props){
    
    const addTask = () =>{
        if(props.inputValue.trim() !==''){
          
          const newObject = { id: Date.now(), value: props.inputValue };

          props.setTask(
            preTask=>[...props.task, newObject]
            )
          props.setInputValue('')
        }
    }
    return(
        <button onClick={addTask}>Add</button>
    )
}