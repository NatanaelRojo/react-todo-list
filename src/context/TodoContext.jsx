import { createContext, useState } from "react";
import { data } from "../data/tasks";
import { useLocalStorage } from "./localStorage";

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
  const [todos, saveTodos] = useLocalStorage("todos_v1", []);
  const [searchedTodos, setSearchedTodos] = useState([...todos]);
  let initialTodos = [...todos];
  const [addButtonState, setAddButtonState] = useState(false);

  const onToggle = () => {
    setAddButtonState(!addButtonState);
  };

  /**
   * It takes a todo object as an argument, pushes it to the data array, and then saves the data
   * array to local storage
   */
  const addTodo = (todo) => {
    setSearchedTodos([...todos, todo]);
    saveTodos([...todos, todo]);
    initialTodos = [...todos];
  };

  /**
   * It takes in a searchText, and if the searchText is greater than 0, it filters the todos array and
   * returns a new array of todos that have the searchText in their name
   */
  const searchTodos = (searchText) => {
    if (searchText.length > 0) {
      const filteredTodos = todos.filter((todo) => {
        const searchedText = searchText.toLowerCase();
        const todoText = todo.name.toLowerCase();
        return todoText.includes(searchedText);
      });
      setSearchedTodos(filteredTodos);
    } else {
      setSearchedTodos([...initialTodos]);
    }
  };

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id != todoId);
    setSearchedTodos([...newTodos]);
    saveTodos(newTodos);
    initialTodos = [...todos];
  };

  return (
    <TodoContext.Provider
      value={{
        data,
        addTodo,
        todos,
        searchTodos,
        searchedTodos,
        deleteTodo,
        addButtonState,
        onToggle,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
