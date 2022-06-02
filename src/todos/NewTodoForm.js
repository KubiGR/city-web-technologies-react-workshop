import { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const createTodo = () => {
    if (inputValue === "") return;
    addTodo({ text: inputValue });
    setInputValue("");
  };

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="button complete-button" onClick={() => createTodo()}>
        Create Todo
      </button>
    </div>
  );
};

export default NewTodoForm;
