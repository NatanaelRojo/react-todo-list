import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Button } from "./Button";

export const Header = () => {
  const { addButtonState, onToggle } = useContext(TodoContext);

  return (
    <header className="container flex justify-between p-4">
      <h1 className="flex items-center justify-center">Todo List</h1>
      {!addButtonState ? (
        <Button text={"Add Todo"} onHandler={onToggle} />
      ) : (
        <Button text={"Close"} onHandler={onToggle} />
      )}
    </header>
  );
};
