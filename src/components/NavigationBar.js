import React from 'react'
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types'
import ToDoList from './TodoList'
import NavigationStyle from '../style/navigation.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './login';
import App from '../App.js'


function logout() {
    localStorage.setItem("uname", "");
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <Login />
    </React.StrictMode>
    );
}

function app() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    );
}

function dashboard() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <NavigationBar/>
        <ToDoList/>
    </React.StrictMode>
    );
}

function NavigationBar() {
    return (
        <div className="blackBackground">
            <ul>
                <a href="/"><li><i className="fa fa-fw fa-home" />  <span>Admin Center</span></li></a>
                <a onClick={dashboard}><li><i className="fa fa-fw fa-home" />  <span>DRI Dashboard</span></li></a>
                <div onClick={logout} className="floatRight">Logout</div>
            </ul>
        </div>
    );
}

export default NavigationBar

