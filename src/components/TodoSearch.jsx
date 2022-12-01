import { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { MdSearch } from "react-icons/md";

export const TodoSearch = () => {
  const [searchText, setSearchText] = useState("");
  const { searchTodos } = useContext(TodoContext);

  const onSearch = (e) => {
    e.preventDefault();
    searchTodos(searchText);
  };

  return (
    <form className="flex w-full ml-1 mb-3 mt-3 mr-1" onSubmit={onSearch}>
      <input
        type={"text"}
        value={searchText}
        placeholder={"Enter a todo name"}
        className="p-2 text-base w-11/12"
        onChange={(e) => {
          searchTodos(e.target.value);
        }}
      />
      <button className=" bg-black w-7">
        <MdSearch className="text-white  text-xl mx-auto my-auto" />
      </button>
    </form>
  );
};
