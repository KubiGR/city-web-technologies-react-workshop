import NewTodoForm from "./todos/NewTodoForm";
import TodoListItem from "./todos/TodoListItem";

const App = () => {
  const todos = [
    {
      id: 1,
      text: "I am the first todo",
    },
    {
      id: 2,
      text: "I am the second todo",
    },
    {
      id: 3,
      text: "I am the third todo",
    },
  ];

  return (
    <div className="app">
      <div className="list-wrapper">
        <NewTodoForm />
        <div className="list-scrollable">
          <TodoListItem todo={todos[0]} />
          <TodoListItem todo={todos[1]} />
          <TodoListItem todo={todos[2]} />
        </div>
        <div className="list-scrollable">
          {todos.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
