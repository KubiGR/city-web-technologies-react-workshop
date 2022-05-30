import svgCheck from "./../assets/check-mark.svg";
import svgDelete from "./../assets/delete.svg";

const CompletedTodoListItem = ({ todo, removeCompletedTodo }) => (
  <div className="completed-todo-item-container">
    <div className="inner-completed-todo-item-container">
      <h2 className="todo-text">{todo.text}</h2>
      <img
        src={svgCheck}
        alt="completed-todo-check"
        className="completed-todo-check-icon"
      />
      <div className="todo-buttons-container">
        <button
          onClick={() => removeCompletedTodo(todo)}
          className="button remove-button"
        >
          <img src={svgDelete} alt="completed-todo-check" className="icon" />
        </button>
      </div>
    </div>
  </div>
);

export default CompletedTodoListItem;
