import React from "react"

export default function InputSection(props){
    

    return(
        <div>
        <input className={props.className}
                value = {props.value}
                onChange={props.onChange}
        />
        
        <button onClick={props.onClick}>Add</button>
        </div>
    )
}