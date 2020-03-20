export const initialState = {
  todos: []
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT_TODO":
      return { ...state, todos: [...state.todos, { todo: action.payload }] };

    case "TOGGLE_COMPLETED":
      const matchedId = state.todos.find(todo => {
        return todo.todo.id === action.payload;
      });
      return {
        ...state,
        todos: state.todos.map(({ todo }) => {
          return matchedId.todo.id === todo.id
            ? { todo: { ...todo, completed: !todo.completed } }
            : { todo };
        })
      };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter(({ todo }) => !todo.completed)
      };

    default:
      return state;
  }
};
