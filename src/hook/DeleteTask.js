import React from "react"

export default function DeleteTask(props){
    const index = props.index

    const handleDelete = (index) => {
        const updatedTasks = [...props.task];
        updatedTasks.splice(index, 1);
        props.setTask(updatedTasks);
        props.setInputValue('');
        props.setEditingIndex(null);
      };

    return(
        <button onClick={() => handleDelete(index)}>Delete</button>
    )
}