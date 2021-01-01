import React from "react";

const TodoList = ({todos, toggleTodo, deleteTodo}) => {
    const todoList = todos.map(todo => {
        const label = todo.completed ? '作業中にする' : '完了にする'
        return (
            <li key={todo.id}>
                {todo.title}
                {todo.id}
                <button onClick={() => toggleTodo(todo.id, todo.completed)}>{label}</button>
                <button onClick={() => deleteTodo(todo.id)}>削除</button>
            </li>
        );
    });
    return <ul>{todoList}</ul>
}

export default TodoList;
