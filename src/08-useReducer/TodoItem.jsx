export const TodoItem = ({
  id,
  description,
  done,
  onDeleteTodo = (f) => f,
}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{description}</span>
      <button
        onClick={() => onDeleteTodo(id)}
        className="btn btn-outline-danger"
      >
        Delete
      </button>
    </li>
  );
};
