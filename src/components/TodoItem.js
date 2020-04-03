import React from "react"

function TodoItem(props) {
    let textStyle = props.todo.completed ? "done" : "notDone";
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.todo.completed} onChange={() => props.handleChange(props.todo.id)} />
            <p className={textStyle}>{props.todo.text}</p>
        </div>
    )
}

export default TodoItem;