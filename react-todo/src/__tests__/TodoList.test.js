import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders the initial todo items", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a project")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByText("Add");

    // Simulate user input
    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addButton);

    // Check if the new todo appears
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    // Click to mark as completed
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    // Click again to mark as not completed
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    const deleteButton = todoItem.nextSibling; // Get the delete button

    // Click delete button
    fireEvent.click(deleteButton);

    // Ensure the todo is removed
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
