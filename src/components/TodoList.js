import React from 'react'
import axios from 'axios'
import '../style/TodoList.css'

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

    render() {
        return (
            <table id='todoTable'>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Deadline</th>
                    <th>Last Updated By</th>
                    <th>Schedule Type</th>
                    <th>TSG Link</th>
                    <th>Modified Time</th>
                </tr>
                 {
                 this.state.list
                     .map(todo =>
                    //  <li className='todoItem' key={todo.id}>{todo.name}</li>
                     <tr>
                        <td>{todo.name}</td>
                        <td>{todo.description}</td>
                        <td>{todo.lastCompletionTime}</td>
                        <td>{todo.lastUpdatedBy}</td>
                        <td>{todo.scheduleType}</td>
                        <td>{todo.tsgLink}</td>
                        <td>{todo.lastUpdated}</td>
                     </tr>
                     )
                 }
            </table>
        )
    }
}

export default TodoList
