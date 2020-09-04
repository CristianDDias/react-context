import React from "react";
import { useTodos, useTodosDispatch } from "../../store/todos/todosStore";

export const TodosList = () => {
  console.count("TodosList");

  const todos = useTodos();
  const dispatch = useTodosDispatch();

  const toggleTodo = (id: string) => {
    dispatch({ type: "TOGGLE", id });
  };

  const removeTodo = (id: string) => {
    dispatch({ type: "REMOVE", id });
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
            <span>{todo.isDone ? "✅" : "🕑"}</span>
            <span>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
