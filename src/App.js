import NewTodoForm from "./todos/NewTodoForm";
import TodoListItem from "./todos/TodoListItem";

const App = () => {
  const todo = {
    text: "I am a todo text",
  };
  return (
    <div className="app">
      <div className="list-wrapper">
        <NewTodoForm />
        <div className="list-scrollable">
          <TodoListItem todo={todo} />
        </div>
      </div>
    </div>
  );
};

export default App;
