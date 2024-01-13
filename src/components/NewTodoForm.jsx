import React, { useContext } from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { TodosStoreContext } from "../App";
import { observer } from "mobx-react-lite";

function _NewTodoForm() {
  const todosStore = useContext(TodosStoreContext);
  const { addTodo } = todosStore;

  const [inputValue, setInputValue] = useState("");
  const inputElementRef = useRef(null);

  const createTodo = useCallback(() => {
    if (inputValue === "") return;
    addTodo({ text: inputValue });
    setInputValue("");
    inputElementRef.current.focus();
  }, [addTodo, inputValue]);

  const handleKeydown = useCallback(
    (evt) => {
      if (evt.key === "Enter") {
        createTodo();
      }
    },
    [createTodo]
  );

  useEffect(() => {
    inputElementRef.current.focus();

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [handleKeydown]);

  return (
    <div className="new-todo-form">
      <input
        ref={inputElementRef}
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
}

export const NewTodoForm = observer(_NewTodoForm);
