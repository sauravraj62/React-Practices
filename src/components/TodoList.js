import '../style/TodoList.css'
import '../style/TodoList.css'
import ReactDOM from 'react-dom/client';
import ToDoList from './TodoList'

import NavigationBar from './NavigationBar';
import React from 'react'
import axios from 'axios'
import moment from 'moment'

class TodoList extends React.Component {
    state = {
        list : []
    }
    componentDidMount = async() => {
        const response = await axios.get('https://oa-todo-backend.herokuapp.com/todolist');
        const todos = response.data;
        console.log(todos);
        this.setState({list : todos});
        console.log(this.state.list);
    }

    generateDeadline = (scheduleType) => {
        let ms = Date.now();
        let milliSecondsInOneDay = 86400000;
        if(scheduleType == "MONTHLY") {
            milliSecondsInOneDay = milliSecondsInOneDay * 30;
        }
        else if(scheduleType == "WEEKLY") {
            milliSecondsInOneDay = milliSecondsInOneDay * 7;
        }

        return ms + milliSecondsInOneDay;
    }

    dashboard = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
        <React.StrictMode>
            <NavigationBar/>
            <ToDoList/>
        </React.StrictMode>
        );
    }

    handleChange = async(todo) => {
        const body = {
            completed: !todo.completed,
            description: todo.description,
            id: todo.id,
            lastCompletionTime: Date.now() * 1000000,
            lastUpdatedBy: todo.lastUpdatedBy,
            name: todo.name,
            scheduleType: todo.scheduleType,
            tsgLink: todo.tsgLink
        }
        await axios.put('https://oa-todo-backend.herokuapp.com/todolist/' + todo.id, body);
        this.dashboard();
      }

      handleDelete = async(todo) => {
        if(window.confirm("Are you sure?") == true) {
            await axios.delete('https://oa-todo-backend.herokuapp.com/todolist/' + todo.id);
            alert(todo.name + " deleted successfully");
            this.dashboard();
        }
      }

    render() {
        return (
            <div className="todo-app">
            <table id='todoTable'>
                <tr>
                    <th>Task</th>
                    <th>Description</th>
                    <th>Last Completion Time</th>
                    <th>Last Updated By</th>
                    <th>Schedule Type</th>
                    <th>TSG Link</th>
                    <th>Modified Time</th>
                    <th>Done</th>
                    <th>Actions</th>
                </tr>
                 {
                 this.state.list
                     .map(todo =>
                    //  <li className='todoItem' key={todo.id}>{todo.name}</li>
                     <tr>
                        <td>{todo.name}</td>
                        <td>{todo.description}</td>
                        <td>{todo.lastCompletionTime == 0 ? "-" : moment(todo.lastCompletionTime/1000000).format("YYYY-MMM-DD")}</td>
                        <td>{todo.lastUpdatedBy}</td>
                        <td>{todo.scheduleType}</td>
                        <td><a href={todo.tsgLink} target="_blank">Link</a></td>
                        <td>{moment(todo.lastUpdated/1000000).format("YYYY-MMM-DD")}</td>
                        <td><input type="checkbox"
                                    onChange={e => this.handleChange(todo)}
                                    defaultChecked={todo.completed}/></td>
                        <td><button onClick={e => this.handleDelete(todo)}>Delete</button></td>
                     </tr>
                     )
                 }
            </table>
            </div>
        )
    }
}

export default TodoList
