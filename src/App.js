import NewTodoForm from "./todos/NewTodoForm";
import TodoListItem from "./todos/TodoListItem";
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

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
