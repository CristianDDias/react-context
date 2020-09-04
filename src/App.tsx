import React from "react";
import { TodosProvider } from "./store/todos/todosStore";
import { Todos } from "./components/Todos/Todos";

export const App = () => {
  return (
    <TodosProvider>
      <Todos />
    </TodosProvider>
  );
};
