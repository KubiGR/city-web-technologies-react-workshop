import { useState, useEffect } from "react";

import NewTodoForm from "./todos/NewTodoForm";
import TodoListItem from "./todos/TodoListItem";

const App = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  const [idCounter, setIdCounter] = useState(
    JSON.parse(localStorage.getItem("idCounter")) || 0
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    localStorage.setItem("idCounter", idCounter);
    document.title = `Todos: ${todoList.length}`;
  });

  const addTodo = (todo) => {
    const newTodoList = todoList.concat({
      ...todo,
      id: idCounter,
    });
    setTodoList(newTodoList);
    setIdCounter((oldIdCounter) => oldIdCounter + 1);
  };

  return (
    <div className="app">
      <div className="list-wrapper">
        <NewTodoForm addTodo={addTodo} />
        <div className="list-scrollable">
          {todoList.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
