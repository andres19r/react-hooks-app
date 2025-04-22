import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todos = [],
  onDeleteTodo = (f) => f,
  onToggleTodo = (f) => f,
}) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};
