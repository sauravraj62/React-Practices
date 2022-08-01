import logo from './logo.svg';
import './App.css';
import './components/TodoForm'
import TodoForm from './components/TodoForm';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="todo-app">
      <NavigationBar/>
      <TodoForm/>
    </div>
  );
}

export default App;
