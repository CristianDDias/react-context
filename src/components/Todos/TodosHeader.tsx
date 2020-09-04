import React from "react";
import { useTodos } from "../../store/todos/todosStore";

export const TodosHeader = () => {
  console.count("TodosHeader");

  const todos = useTodos();

  return (
    <div>
      <span>Todos: {todos.length}</span>
    </div>
  );
};
