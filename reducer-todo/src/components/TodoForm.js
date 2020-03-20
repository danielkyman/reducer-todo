import React from "react";

const TodoForm = props => {
  return (
    <div>
      <div>
        <form onSubmit={props.submitHandler}>
          <input
            type="text"
            onChange={props.changeHandler}
            value={props.inputText}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
