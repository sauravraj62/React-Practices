import React from 'react'
import PropTypes from 'prop-types'
import NavigationStyle from '../style/navigation.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function NavigationBar() {
    return (
        <div className="blackBackground">
            <ul>
                <a href="/"><li><i className="fa fa-fw fa-home" />  <span>Admin Center</span></li></a>
                <a href="/todoList"><li><i className="fa fa-fw fa-home" />  <span>DRI Dashboard</span></li></a>
                <a href="https://github.com/sauravraj62/todo-app" target="_blank" className="floatRight"><li><i className="fa fa-github" /> <span>GitHub</span></li></a>
            </ul>
        </div>
    );
}

export default NavigationBar

