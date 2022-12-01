import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoForm = () => {
  const { searchedTodos, addTodo, onToggle } = useContext(TodoContext);
  const [todoName, setTodoName] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoReminder, setTodoReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: searchedTodos.length + 1,
      name: todoName,
      description: todoDescription,
      reminder: todoReminder,
    };
    addTodo(newTodo);
    setTodoName("");
    setTodoDescription("");
    setTodoReminder(false);
    onToggle();
  };

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <label className="mx-1 my-1">Todo Name</label>
      <input
        type={"text"}
        placeholder="Todo Name"
        value={todoName}
        className="m-2 p-2 text-base text-black rounded-md"
        onChange={(e) => setTodoName(e.target.value)}
      />
      <label className="mx-2">Todo Description</label>
      <input
        type={"text"}
        placeholder="Todo Description"
        value={todoDescription}
        className="m-2 p-2 text-base text-black rounded-md"
        onChange={(e) => setTodoDescription(e.target.value)}
      />
      <div className="flex">
        <input
          type={"checkbox"}
          checked={todoReminder}
          value={todoReminder}
          className="m-2"
          onChange={(e) => setTodoReminder(e.currentTarget.checked)}
        />
        <label className="mx-2">Set Reminder</label>
      </div>
      <div className="flex">
        <input
          type={"submit"}
          value="Submit"
          className="bg-green-700 items-center justify-center text-white w-full m-2 hover:bg-red-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        />
      </div>
    </form>
  );
};
