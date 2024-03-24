import './App.css'; 
import React, { useState } from 'react'
import ListSection from './listSection';
import AddTask from './AddTask';

export default function App(){
  
  const[task, setTask] =useState([]);
  const [inputValue, setInputValue] = useState('') 
  const handleInputChange = (event) =>{
    setInputValue(event.target.value)
  }
  
  return(

    
    <div>

      <input className='inputTask'
             value={inputValue}
             onChange={handleInputChange}
      />

      <AddTask inputValue={inputValue} 
               setInputValue={setInputValue} 
               task={task} 
               setTask={setTask}/>

      <ListSection
            task={task}    
            setTask={setTask}
            inputValue={inputValue}
            setInputValue={setInputValue} 
            handleInputChange={handleInputChange}        
      />
        
      </div>
    )
}