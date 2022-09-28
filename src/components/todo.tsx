import { TodoInterface } from "../interfaces/todoIntfc";

interface Props {
  todo: TodoInterface;
  completeTask(name: String): void;
}

const Todo = ({ todo, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{todo.name}</span>
        <span>{"" + todo.priority}</span>
      </div>
      <button
        onClick={() => {
          completeTask(todo.name);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Todo;
