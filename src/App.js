import { useState, useEffect } from "react";

import NewTodoForm from "./todos/NewTodoForm";
import TodoListItem from "./todos/TodoListItem";
import CompletedTodoListItem from "./todos/CompletedTodoListItem";
import { githubApi } from "./services/githubApi";
// import Clock from "./todos/Clock";

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
    githubApi.getGistState().then((data) => {
      console.log(`🐒L`, data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    localStorage.setItem("idCounter", idCounter);
    localStorage.setItem(
      "completedTodoList",
      JSON.stringify(completedTodoList)
    );

    const stateObject = {
      todoList,
      idCounter,
      completedTodoList,
    };

    githubApi.updateGistState(stateObject);

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

  const editTodo = (todo, newText) => {
    const todoToEdit = todoList.find((e) => todo.id === e.id);
    todoToEdit.text = newText;
    setTodoList(todoList.slice());
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
      {/* <div style={{ position: "absolute" }}>
        <Clock />
      </div> */}
      <div className="list-wrapper">
        <NewTodoForm addTodo={addTodo} />
        <div className="list-scrollable">
          {todoList.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
              editTodo={editTodo}
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
