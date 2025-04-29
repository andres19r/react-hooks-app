import { render, screen } from "@testing-library/react";
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
});
