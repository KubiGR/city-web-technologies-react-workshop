const NewTodoForm = () => {
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here..."
      />
      <button className="button complete-button">Create Todo</button>
    </div>
  );
};

export default NewTodoForm;
