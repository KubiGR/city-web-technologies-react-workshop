import { useState, useEffect } from "react";

import { NewTodoForm } from "./components/NewTodoForm";
import { githubApi } from "./services/githubApi";
import React from "react";
import { TodoList } from "./components/TodoList";

export function App() {
  useEffect(() => {
    githubApi.getGistState().then((data) => {
      console.log(`🐒L`, data);
    });
  }, []);

  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  const [idCounter, setIdCounter] = useState(
    JSON.parse(localStorage.getItem("idCounter")) || 0
  );

  const addTodo = (todo) => {
    const newTodoList = todoList.concat({
      ...todo,
      id: idCounter,
      completed: false,
    });
    setTodoList(newTodoList);
    setIdCounter((oldIdCounter) => oldIdCounter + 1);
  };

  const removeTodo = (todo) => {
    const newTodoList = todoList.filter((e) => todo.id !== e.id);
    setTodoList(newTodoList);
  };

  const editTodo = (todo, newText) => {
    const todoToEdit = todoList.find((e) => todo.id === e.id);
    todoToEdit.text = newText;
    setTodoList(todoList.slice());
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    localStorage.setItem("idCounter", idCounter);

    const stateObject = {
      todoList,
      idCounter,
    };

    githubApi.updateGistState(stateObject);
  }, [idCounter, todoList]);

  useEffect(() => {
    document.title = `Todos: ${todoList.length}`;
  }, [todoList.length]);

  return (
    <div className="app">
      <div className="list-wrapper">
        <NewTodoForm addTodo={addTodo} />
        <TodoList
          todoList={todoList}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}
