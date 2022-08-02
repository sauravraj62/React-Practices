import '../style/TodoList.css'
import '../style/TodoList.css'

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
        window.location.reload();
      }

    render() {
        return (
            <div className="todo-app">
            <NavigationBar/>
            <table id='todoTable'>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Last Completion Time</th>
                    <th>Last Updated By</th>
                    <th>Schedule Type</th>
                    <th>TSG Link</th>
                    <th>Modified Time</th>
                    <th>Done</th>
                </tr>
                 {
                 this.state.list
                     .map(todo =>
                    //  <li className='todoItem' key={todo.id}>{todo.name}</li>
                     <tr>
                        <td>{todo.name}</td>
                        <td>{todo.description}</td>
                        <td>{moment(todo.lastCompletionTime/1000000).format("YYYY-MMM-DD")}</td>
                        <td>{todo.lastUpdatedBy}</td>
                        <td>{todo.scheduleType}</td>
                        <td>{todo.tsgLink}</td>
                        <td>{moment(todo.lastUpdated/1000000).format("YYYY-MMM-DD")}</td>
                        <td><input type="checkbox"
                                    onChange={e => this.handleChange(todo)}
                                    defaultChecked={todo.completed}/></td>
                     </tr>
                     )
                 }
            </table>
            </div>
        )
    }
}

export default TodoList
