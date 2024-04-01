import React,{ useState } from "react"
import DeleteTask from "./DeleteTask"
import UpdateTask from "./UpdateTask"
import HandleEdit from "./HandleEdit"

export default function TaskItem(props){

    const [editingIndex, setEditingIndex] = useState(null);
    const{ setTask, task, setInputValue, inputValue, handleInputChange} = props
    
    return(
        task.map((taskItem, index) => (
                
            <li key={taskItem.id}>
            
            {editingIndex === taskItem.id ? (
                <HandleEdit
                setTask={setTask}
                setInputValue={setInputValue}
                task={task}
                inputValue={inputValue}
                handleInputChange={handleInputChange}
                setEditingIndex={setEditingIndex}
                taskItem={taskItem}
                />
            ) : (
                <UpdateTask
                    index={taskItem}
                    setEditingIndex={setEditingIndex}
                    setInputValue={setInputValue}
                    task={task}
                />                  
            )}

            <DeleteTask
                index={index}
                task ={task}
                setTask={setTask}
                setInputValue={setInputValue}
                setEditingIndex={setEditingIndex}
            />
            </li>
        ))
    )
}