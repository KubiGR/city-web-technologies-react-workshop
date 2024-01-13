import { action, autorun, makeAutoObservable } from "mobx";
import { githubApi } from "../services/githubApi";

export class TodosStore {
  todos = [];
  idCounter = 0;
  hasFetchedData = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    githubApi.getGistState().then(
      action((data) => {
        this.todos = data.todos;
        this.idCounter = data.idCounter;
        this.hasFetchedData = true;

        autorun(() => {
          githubApi.updateGistState({
            todos: this.todos,
            idCounter: this.idCounter,
          });
        });
      })
    );

    autorun(() => {
      document.title = `Todos: ${this.todos.length}`;
    });
  }

  addTodo(todo) {
    this.todos.push({
      ...todo,
      id: this.idCounter,
    });
    this.idCounter++;
  }

  removeTodo(todo) {
    this.todos = this.todos.filter((e) => todo.id !== e.id);
  }

  editTodo(todo, newText) {
    const todoToEdit = this.todos.find((e) => todo.id === e.id);
    todoToEdit.text = newText;
  }
}

export const todosStore = new TodosStore();
