import { useTodo } from "../hooks";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodo();

  return (
    <>
      <h1>
        Todo App ({todosCount}) - <small>pending: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            onToggleTodo={handleToggleTodo}
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
          />
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
