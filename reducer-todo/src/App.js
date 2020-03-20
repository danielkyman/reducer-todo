import React, { useState, useReducer } from "react";
import { todoReducer, initialState } from "./reducers/todoReducer";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [inputText, setInputText] = useState("");

  const changeHandler = e => {
    setInputText(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    dispatch({
      type: "SUBMIT_TODO",
      payload: {
        item: inputText,
        completed: false,
        id: Date.now()
      }
    });
    setInputText("");
  };

  const toggleCompleted = id => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="App">
      <h1>Reducer To Do</h1>
      <div>
        {state.todos.map(todo => {
          return (
            <li
              className={todo.todo.completed ? "complete" : ""}
              onClick={() => {
                toggleCompleted(todo.todo.id);
              }}
            >
              {todo.todo.item}
            </li>
          );
        })}
      </div>
      <button onClick={() => clearCompleted()}>Clear Completed</button>
      <TodoForm
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        inputText={inputText}
      />
    </div>
  );
}

export default App;
