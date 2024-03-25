import React from "react"

export default function UpdateTask(props){
    const index = props.index
    const handleDoubleClick = (index) => {
        props.setEditingIndex(index.id);
        props.setInputValue(index.value);
      };

    return(
        <span onDoubleClick={() => handleDoubleClick(index)}>{index.value}</span>
    )
}