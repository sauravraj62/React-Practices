import React, {useState} from 'react'
import TodoFormCSS from '../style/TodoForm.css'
import axios from 'axios'

function TodoForm() {
    const [name, setName] = useState('');
    const [scheduleType, setScheduleType] = useState('');
    const [des, setDescription] = useState('');
    const [deadline, setDealdline] = useState('');
    const [tsgLink, setTsgLink] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const body = {
            name: name,
            scheduleType: scheduleType,
            description: des,
            tsgLink: tsgLink,
            lastUpdatedBy: "admin"
          };
        console.log("Body" + body);
        const response = await axios.post('https://oa-todo-backend.herokuapp.com/todolist', body);
        console.log("Response" + response);
    }

  return (
    <div className='form-div'>
        <h2>Add a task</h2>
        <form className="todo-form" onSubmit={handleSubmit}>
        <input 
            type='text' 
            placeholder='Name' 
            value={name} 
            className='todo-input'
            onChange={(e) => setName(e.target.value)}
            required>
        </input>

        <input 
            type='text' 
            placeholder='Description' 
            value={des} 
            className='todo-input'
            onChange={(e) => setDescription(e.target.value)}
            required>
        </input>

        {/* <input 
            type='text' 
            placeholder='Deadline' 
            value={deadline} 
            className='todo-input'
            onChange={(e) => setDealdline(e.target.value)}
            required>
        </input> */}

        <input 
            type='text' 
            placeholder='Schedule Type' 
            value={scheduleType} 
            className='todo-input'
            onChange={(e) => setScheduleType(e.target.value)}
            required>
        </input>

        <input 
            type='text' 
            placeholder='TSG Link' 
            value={tsgLink} 
            className='todo-input'
            onChange={(e) => setTsgLink(e.target.value)}
            required>
        </input>
        <br/>
        <button className='todo-button'>Add todo</button>
      </form>
    </div>
  )
}

export default TodoForm
