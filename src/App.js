import { useState, useEffect } from "react";

import NewTodoForm from "./todos/NewTodoForm";
import TodoListItem from "./todos/TodoListItem";
import CompletedTodoListItem from "./todos/CompletedTodoListItem";

const App = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  const [completedTodoList, setCompletedTodoList] = useState(
    JSON.parse(localStorage.getItem("completedTodoList")) || []
  );
  const [idCounter, setIdCounter] = useState(
    JSON.parse(localStorage.getItem("idCounter")) || 0
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    localStorage.setItem("idCounter", idCounter);
    localStorage.setItem(
      "completedTodoList",
      JSON.stringify(completedTodoList)
    );
    document.title = `Todos: ${todoList.length}`;
  });

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

  const completeTodo = (todo) => {
    const newTodoList = todoList.filter((e) => todo.id !== e.id);
    setTodoList(newTodoList);
    const newCompletedTodoList = completedTodoList.concat({
      ...todo,
      completed: true,
    });
    setCompletedTodoList(newCompletedTodoList);
  };

  const removeCompletedTodo = (todo) => {
    const newCompletedTodoList = completedTodoList.filter(
      (e) => todo.id !== e.id
    );
    setCompletedTodoList(newCompletedTodoList);
  };

  return (
    <div className="app">
      <div className="list-wrapper">
        <NewTodoForm addTodo={addTodo} />
        <div className="list-scrollable">
          {todoList.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
          {completedTodoList.map((todo) => (
            <CompletedTodoListItem
              key={todo.id}
              todo={todo}
              removeCompletedTodo={removeCompletedTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
