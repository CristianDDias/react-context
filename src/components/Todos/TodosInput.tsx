import React from "react";
import { useTodosDispatch } from "../../store/todos/todosStore";

export const TodosInput = () => {
  console.count("TodosInput");

  const dispatch = useTodosDispatch();

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current?.value) {
      dispatch({
        type: "ADD",
        text: inputRef.current.value,
      });
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add todo..." ref={inputRef} />
      <input type="submit" value="Add" />
    </form>
  );
};
