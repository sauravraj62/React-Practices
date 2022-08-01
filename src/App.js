import logo from './logo.svg';
import './App.css';
import './components/TodoForm'
import ToDoList from './components/TodoList'
import TodoForm from './components/TodoForm';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="todo-app">
      <NavigationBar/>
      <Router>
            <Routes>
                <Route path="/" element={<TodoForm/>} />
                <Route path="/todoList" element={<ToDoList/>} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
