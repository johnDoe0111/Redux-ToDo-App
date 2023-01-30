import './todo.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'

const Todo = () => {
    const dispatch = useDispatch();
    const handleClick = (id) => {
        dispatch({
            type: 'DELETE_TODO',
            payload: {
                id: id
            }
        })
    }
    const todos = useSelector((state) => state.todos)

    if (!todos || !todos.length) {
        return <p className='absence-todo'>no todos</p>
    } else {
        return (
            <>
                {todos.map((todo) => (
                    <div className="todo">
                    <p className="todo-value">{todo.label}</p>
                    <div className="icon-block">
                        <FontAwesomeIcon icon={faTrash} className="icon" onClick={() => handleClick(todo.id)}/>
                    </div>
                </div>
                ))}
            </>
        )
    }
}

export default Todo