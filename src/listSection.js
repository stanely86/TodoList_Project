import React from "react"
import TaskItem from "./component/TaskItem"


export default function ListSection(props){
    const{setInputValue, setTask, task, inputValue, handleInputChange } = props
    
    return (
        <ul>
          <TaskItem
          setTask ={setTask}
          task ={task}
          setInputValue = {setInputValue}
          inputValue = {inputValue}
          handleInputChange ={handleInputChange}
          />
        </ul>
        
      );
}