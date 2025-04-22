import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: "Collect the soul stone",
  //   done: false,
  // },
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (newTodo = {}) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: newTodo,
    };
    dispatch(action);
  };

  return (
    <>
      <h1>
        Todo App (10) - <small>pending: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>

        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />

          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
