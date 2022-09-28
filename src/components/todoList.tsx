import { TodoInterface } from "../interfaces/todoIntfc";
import Todo from "./todo";

function TodoList({ todos, completeTask }: any) {
  return (
    <div className="todoList">
      {todos.map((el: TodoInterface) => (
        <Todo
          todo={el}
          completeTask={completeTask}
          key={Math.floor(Math.random() * 10000)}
        />
      ))}
    </div>
  );
}

export default TodoList;
