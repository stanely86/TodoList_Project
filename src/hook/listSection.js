import React, { useState } from "react"
import DeleteTask from "./DeleteTask"
import UpdateTask from "./UpdateTask";

export default function ListSection(props){
    const{task, inputValue, handleInputChange } = props
    const [editingIndex, setEditingIndex] = useState(null);

    const handleEdit = (index) => {

      const updatedTasks = [...task]
      
      const find = updatedTasks.findIndex(item => item.id === index.id);

      if (find !== -1) { // Check if object with given id exists
        // Step 3: Make a copy of the object (immutable update)
        // Step 4: Update the value inside the copied object
        updatedTasks[find].value = inputValue.trim()

        props.setTask(updatedTasks)

        props.setInputValue('')
        setEditingIndex(null)
      };    
    };
  
    
    return (
      
        <ul>
          {task.map((index) => (
            <li key={index.id}>
              {index.value} 

               {editingIndex === index.id ? (
                <>
                  <input
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={() => handleEdit(index.id)}
                    autoFocus
                  />
                  <button onClick={() => handleEdit(index)}>Save</button>
                </>
              ) : (
                <>
                  <UpdateTask
                      index={index}
                      setEditingIndex={setEditingIndex}
                      setInputValue={props.setInputValue}
                      task={props.task}
                  />

                  <DeleteTask
                    index={props.index}
                    task ={props.task}
                    setTask={props.setTask}
                    setInputValue={props.setInputValue}
                    setEditingIndex={setEditingIndex}
                  />

                  
                </>
              )}

            </li>
          ))}
        </ul>
        
      );
}