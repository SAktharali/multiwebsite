import React from 'react';

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  // Toggle todo completion status
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Set editTodo state with the selected todo
  const handleEdit = (todo) => {
    setEditTodo(todo);
  };

  // Delete a todo item
  const handleDelete = (todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <span
           className={`list ${todo.completed ? 'todo-complete' : ''}`}
         > {todo.title}</span>
        <div>
            <button
              className={`${
                todo.completed
                  ? 'button-complete-check'
                  : 'button-complete-uncheck'
              } task-button`}
              onClick={() => handleComplete(todo)}
            >
              <i className="bi bi-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <i className="bi bi-pencil"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
