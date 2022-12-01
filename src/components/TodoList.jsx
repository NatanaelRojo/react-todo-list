import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Todo } from "./Todo";

export const TodoList = () => {
  const { searchedTodos = [] } = useContext(TodoContext);

  return searchedTodos.map((todo) => {
    return <Todo key={todo.id} todo={todo} />;
  });
};
