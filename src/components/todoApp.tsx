import { useState, ChangeEvent, SyntheticEvent } from "react";
import { TodoInterface } from "../interfaces/todoIntfc";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

function TodoApp() {
  const initialState = {
    name: "",
    priority: 0,
  };
  const [state, setState] = useState(initialState);
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setState((st) => ({
      ...st,
      [e.target.name]: e.target.value,
    }));
  };

  const addTask = (e: SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setTodos((st) => [...st, { name: state.name, priority: state.priority }]);
    setState(initialState);
  };

  const completeTask = (name: String): void => {
    setTodos((st) => st.filter((el: TodoInterface) => el.name !== name));
  };

  return (
    <div className="App">
      <TodoForm addTask={addTask} handleChange={handleChange} state={state} />
      <TodoList todos={todos} completeTask={completeTask} />
    </div>
  );
}

export default TodoApp;
