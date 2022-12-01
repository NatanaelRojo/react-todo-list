import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

export const Main = () => {
  const { searchedTodos, addButtonState } = useContext(TodoContext);

  return (
    <main className="container flex flex-col">
      {addButtonState && <TodoForm />}
      <TodoSearch />
      <div className="flex flex-col">
        {searchedTodos.length > 0 ? (
          <h2 className="px-5">Your pending tasks</h2>
        ) : (
          <h2>No tasks</h2>
        )}
        <TodoList />
      </div>
    </main>
  );
};
