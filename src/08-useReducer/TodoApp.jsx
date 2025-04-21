import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Collect the soul stone",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Collect the power stone",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  console.log(todos);

  return (
    <>
      <h1>
        Todo App (10) - <small>pending: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <span className="align-self-center">Item 1</span>
              <button className="btn btn-outline-danger">Delete</button>
            </li>
          </ul>
        </div>

        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />

          <form>
            <input
              type="text"
              placeholder="New todo"
              className="form-control"
            />
            <button className="btn btn-primary mt-1" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
