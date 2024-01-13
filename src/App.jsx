import { createContext } from "react";

import { NewTodoForm } from "./components/NewTodoForm";
import React from "react";
import { TodoList } from "./components/TodoList";
import { todosStore } from "./store/todosStore";
import { observer } from "mobx-react-lite";

export const TodosStoreContext = createContext(null);

function _App() {
  return (
    <TodosStoreContext.Provider value={todosStore}>
      <div className="app">
        {todosStore.hasFetchedData ? (
          <div className="list-wrapper">
            <NewTodoForm />
            <TodoList />
          </div>
        ) : (
          <h1 style={{ textAlign: "center", color: "bisque" }}>
            Loading todos...
          </h1>
        )}
      </div>
    </TodosStoreContext.Provider>
  );
}

export const App = observer(_App);
