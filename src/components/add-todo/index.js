// import React from "react";
import styles from "./index.module.css";
import { useLocalStorage } from "usehooks-ts";
import { useState } from "react";

function AddTodo() {
    // const [todo, setTodo] = React.useState("");
    const [todos, setTodos] = useLocalStorage("TODO_KEY", []);
    // let todo;

    // todos is the old one  todo is the new one the person is typing

    const [todo, setTodo] = useState("");

    function collectInput(event) {
        // console.log(event.target.value);
        // todo = event.target.value;

        setTodo(event.target.value);
    }

    // arrow function
    // const collectInput = (event) => { setTodo(event.target.value); }

    function saveTodo() {
        // console.log(todo);
        // get existing list of todos from local storage
        // let todos = JSON.parse(localStorage.getItem("TODO_KEY")) || [];

        // add new todo to existing list of todos 
        // todos.push(todo);
        // Set all todos in local storage
        setTodos([...todos, todo]);
        // TODO_KEY is the key todo is the value
    }
    return (
        <section className={styles.addTodo}>
            <input
                onChange={collectInput}
                className={styles.addTodoInput}
                placeholder="Start typing..." />
            <button onClick={saveTodo}>Create</button>
        </section>
    );
}
export default AddTodo;