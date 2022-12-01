import { useState, useContext } from "react";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Todo } from "./components/Todo";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { TodoContext } from "./context/TodoContext";

export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
