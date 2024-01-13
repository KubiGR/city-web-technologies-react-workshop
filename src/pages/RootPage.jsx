import { useContext } from "react";
import { TodosStoreContext } from "../App";
import React from "react";
import { NewTodoForm } from "../components/NewTodoForm";
import { TodoList } from "../components/TodoList";
import { observer } from "mobx-react-lite";

function _RootPage() {
  const todosStore = useContext(TodosStoreContext);
  return todosStore.hasFetchedData ? (
    <div className="list-wrapper">
      <NewTodoForm />
      <TodoList />
    </div>
  ) : (
    <h1 style={{ textAlign: "center", color: "bisque" }}>Loading todos...</h1>
  );
}

export const RootPage = observer(_RootPage);
