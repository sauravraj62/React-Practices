import React, {useState} from 'react'
import TodoFormCSS from '../style/TodoForm.css'

function TodoForm() {
    const [name, scheduleType, des, deadline, input, setInput, tsgLink] = useState('')

    const handleSubmit = e => {
        alert();
    }

  return (
    <div className='form-div'>
        <h2>Add a task</h2>
        <form className="todo-form" onSubmit={handleSubmit}>
        <input 
            type='text' 
            placeholder='Name' 
            value={name} 
            className='todo-input'>
        </input>

        <input 
            type='text' 
            placeholder='Description' 
            value={des} 
            className='todo-input'>
        </input>

        <input 
            type='text' 
            placeholder='Deadline' 
            value={deadline} 
            className='todo-input'>
        </input>

        <input 
            type='text' 
            placeholder='Schedule Type' 
            value={scheduleType} 
            className='todo-input'>
        </input>

        <input 
            type='text' 
            placeholder='TSG Link' 
            value={tsgLink} 
            className='todo-input'>
        </input>
        <br/>
        <button className='todo-button'>Add todo</button>
      </form>
    </div>
  )
}

export default TodoForm
