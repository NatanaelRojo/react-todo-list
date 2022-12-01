import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Button } from "./Button";

export const Todo = ({ todo }) => {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <div className="flex justify-between m-">
      <div className="flex flex-col">
        <h3 className="text-lg text-black  m-1">{todo.name}</h3>
        <p className="text-base text-black  m-2">{todo.description}</p>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-black" onClick={() => deleteTodo(todo.id)}>
          delete
        </button>
      </div>
    </div>
  );
};
