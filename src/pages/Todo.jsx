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
            <div className='todo-app'>
                <h1>TODO APP</h1>
                <form className='form' onSubmit={saveTodoList}>
                    <input className='input' type="text" name='todoname' />
                    <button className='button'>Save</button>
                </form>

                <div className="outerdiv">
                    <ul>
                        {list}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TodoApp

function ToDolistItems({ value, indexNumber, todolist, setTodolist }) {
    let [status, setStatus] = useState(false)
    let deleteRow = () => {
        let finalData = todolist.filter((val, idx) => idx != indexNumber);
        setTodolist(finalData);
    }
    let checkStatus = () => {
        setStatus(!status);

    }
    return (
        <li className={(status) ? "completetodo" : ''} onClick={checkStatus}> {indexNumber + 1} {value} <span onClick={deleteRow}>&times;</span></li>
    )
}