function TodoForm({ addTask, handleChange, state }: any) {
  return (
    <form className="header" onSubmit={addTask}>
      <div className="inputContainer">
        <input
          value={state.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          value={state.deadline}
          onChange={handleChange}
          name="deadline"
          type="number"
          placeholder="Deadline"
          required
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;
