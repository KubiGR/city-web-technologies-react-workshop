import { TodoListItem } from "./TodoListItem";
import React from "react";

export function TodoList({ todoList }) {
  return todoList.map((todo) => <TodoListItem key={todo.id} todo={todo} />);
}
