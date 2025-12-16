import React, { useState } from 'react'
import "../Todo.css";

const TodoApp = () => {
    const [todolist, setTodolist] = useState([])

    let saveTodoList = (e) => {
        let todoname = e.target.todoname.value;
        if (!todolist.includes(todoname)) {
            let finaltodolist = [...todolist, todoname];
            setTodolist(finaltodolist);
        }
        else {
            alert("Todo already exists or is invalid!");
        }
        e.preventDefault();
    }
    return (
        <div>
            <h1>Hi</h1>
            <form className='form' onSubmit={saveTodoList}>
                <input className='input' type="text" name='todoname' />
                <button className='button'>Save</button>
            </form>

            <div className="outerdiv">
                <ul>
                    <ToDolistItems />
                </ul>
            </div>
        </div>
    )
}

export default TodoApp

function ToDolistItems() {
    return (
        <li>HTML <span>&times;</span></li>
    )
}