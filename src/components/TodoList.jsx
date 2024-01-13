import { observer } from "mobx-react-lite";
import { TodosStoreContext } from "../App";
import { TodoListItem } from "./TodoListItem";
import React, { useContext } from "react";

function _TodoList() {
  const todosStore = useContext(TodosStoreContext);
  const { todos } = todosStore;

  return todos.map((todo) => <TodoListItem key={todo.id} todo={todo} />);
}

export const TodoList = observer(_TodoList);
