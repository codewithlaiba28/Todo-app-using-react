import React, { useState } from 'react'
import "../Todo.css";
import "../index.css";
import { Link } from "react-router-dom";
import hero_image from '../assets/Mask Group.png';

const TodoApp = () => {
    const [todolist, setTodolist] = useState([])


    let saveTodoList = (e) => {
        let todoname = e.target.todoname.value;
        if (todoname && !todolist.includes(todoname)) {
            let finaltodolist = [...todolist, todoname];
            setTodolist(finaltodolist);
        }
        else {
            alert("Todo already exists or is invalid!");
        }
        e.preventDefault();
        e.target.todoname.value = "";
    }
    let list = todolist.map((value, index) => {
        return (
            <ToDolistItems value={value} key={index} indexNumber={index}
                todolist={todolist}
                setTodolist={setTodolist}
            />
        )
    })
    return (
        <div className='main-div'>
            {/* Background image from Hero section */}
            <img
                src={hero_image}
                alt=""
                className='absolute inset-0 min-h-screen pointer-events-none opacity-50'
            />

            <div className="todo-container-wrapper">
                <Link to="/" className="text-m font-bold mb-6 text-gray-300 back-home inline-flex">
                    &larr; Back To Home
                </Link>
                <p className="text-4xl font-bold main-div-title">TODO APP</p>
                <div className='todo-app'>
                    <p className="text-2xl font-bold mb-4 color-todo-app font-hero-family tracking-wider">Add New Task</p>
                    <p className="text-sm font-medium mb-2 color-todo-app opacity-80 uppercase tracking-widest">Task Title*</p>
                    <form className='form' onSubmit={saveTodoList}>
                        <input className='input' type="text" name='todoname' placeholder='What needs to be done?' />
                        <button className='button'>Save Task</button>
                    </form>
                    <div className='outer-div-main'>
                        <div className="outerdiv">
                            <ul>
                                {list}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoApp

function ToDolistItems({ value, indexNumber, todolist, setTodolist }) {
    let [status, setStatus] = useState(false)
    let deleteRow = (e) => {
        e.stopPropagation();
        let finalData = todolist.filter((val, idx) => idx != indexNumber);
        setTodolist(finalData);
    }
    let checkStatus = () => {
        setStatus(!status);

    }
    return (
        <li className={(status) ? "completetodo" : ''} onClick={checkStatus}>
            <span className="task-number mr-3 opacity-50">{indexNumber + 1}.</span>
            {value}
            <span className="delete-icon" onClick={deleteRow}>&times;</span>
        </li>
    )
}
