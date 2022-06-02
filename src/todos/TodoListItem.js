import svgCheck from "./../assets/check-mark.svg";
import svgDelete from "./../assets/delete.svg";
import svgEdit from "./../assets/edit.svg";

const TodoListItem = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo-item-container">
      <h2 className="todo-text">{todo.text}</h2>
      <div className="todo-buttons-container">
        <button
          onClick={() => completeTodo(todo)}
          className="button complete-button"
        >
          <img src={svgCheck} alt="Complete todo" className="icon" />
        </button>
        <button className="button edit-button">
          <img src={svgEdit} alt="Edit todo" className="icon" />
        </button>
        <button
          onClick={() => removeTodo(todo)}
          className="button remove-button"
        >
          <img src={svgDelete} alt="Remove todo" className="icon" />
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
