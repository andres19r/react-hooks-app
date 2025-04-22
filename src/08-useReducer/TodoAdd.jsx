import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { formState, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const { description } = formState;

  const onSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={description}
        name="description"
        onChange={onInputChange}
        type="text"
        placeholder="New todo"
        className="form-control"
      />
      <button className="btn btn-primary mt-2" type="submit">
        Add
      </button>
    </form>
  );
};
