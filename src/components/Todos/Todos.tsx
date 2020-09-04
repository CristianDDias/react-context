import React from "react";
import { TodosHeader } from "./TodosHeader";
import { TodosInput } from "./TodosInput";
import { TodosList } from "./TodosList";

export const Todos = () => {
  return (
    <div>
      <TodosHeader />
      <TodosInput />
      <TodosList />
    </div>
  );
};
