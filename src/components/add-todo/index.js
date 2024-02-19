import React from "react";
import styles from "./index.module.css";
function AddTodo() {
    // const [todo, setTodo] = React.useState("");
    let todo;
    function collectInput(event) {
        // console.log(event.target.value);
        todo = event.target.value;
    }
    function saveTodo() {
        console.log(todo);
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