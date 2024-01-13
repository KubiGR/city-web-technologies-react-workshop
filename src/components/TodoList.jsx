import { TodoListItem } from "./TodoListItem";
import React from "react";

export function TodoList({ todoList, removeTodo, editTodo }) {
  return todoList.map((todo) => (
    <TodoListItem
      key={todo.id}
      todo={todo}
      removeTodo={removeTodo}
      editTodo={editTodo}
    />
  ));
}
