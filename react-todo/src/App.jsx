import React from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm"

function App() {
  return (
    <div>
      <h1>React Todo App</h1>
      <TodoList />
      <AddTodoForm />
    </div>
  );
}

export default App;
