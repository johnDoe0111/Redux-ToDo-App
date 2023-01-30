import './App.css';
import TodoInput from './todo-input/TodoInput';
import Todo from './todo-block/Todo';

function App() {
  return (
    <div className="App">
        <TodoInput/>
        <Todo/>
    </div>
  );
}

export default App;