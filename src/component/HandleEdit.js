import React from "react"

export default function HandleEdit(props){

    const{setInputValue, setTask,task, inputValue, handleInputChange, setEditingIndex, taskItem} = props

    const handleEdit = (index) => {

        const updatedTasks = [...task]
        
        const find = updatedTasks.findIndex(item => item.id === index.id);
  
        if (find !== -1) { // Check if object with given id exists
          // Step 3: Make a copy of the object (immutable update)
          // Step 4: Update the value inside the copied object
          updatedTasks[find].value = inputValue.trim()
  
          setTask(updatedTasks)
  
          setInputValue('')
          setEditingIndex(null)
        };    
      };

    return(
        <>
        <input
         value={inputValue}
         onChange={handleInputChange}
         onBlur={() => handleEdit(taskItem.id)}
         autoFocus
        />
        <button onClick={() => handleEdit(taskItem)}>Save</button>
                </>
    )  
}