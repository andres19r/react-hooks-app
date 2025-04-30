import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("<TodoItem /> tests", () => {
  const todo = {
    id: 1,
    description: "soul stone",
    done: false,
  };
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should show the pending todo to complete", () => {
    render(
      <TodoItem
        id={todo.id}
        description={todo.description}
        done={todo.done}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    const spanElement = screen.getByLabelText("span");

    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });

  test("should show the todo completed", () => {
    render(
      <TodoItem
        id={todo.id}
        description={todo.description}
        done={true}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");

    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("should call ToggleTodo by span on click", () => {
    render(
      <TodoItem
        id={todo.id}
        description={todo.description}
        done={todo.done}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalled();
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("should call DeleteTodo by buttton on click", () => {
    render(
      <TodoItem
        id={todo.id}
        description={todo.description}
        done={todo.done}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
    const deleteBtn = screen.getByRole("button");
    fireEvent.click(deleteBtn);

    expect(onDeleteTodoMock).toHaveBeenCalled();
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
