import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import './styles/todo.css';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';

const Todo = () => {
  // Retrieve todos from local storage or initialize as an empty array
  const initialState = JSON.parse(localStorage.getItem('todos')) || [];
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Update todo item
  const updateTodo = (title, id, completed) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(updatedTodos);
    setEditTodo(null); // Clear edit state
  };
console.log(todos);
  // Set input field based on editTodo state
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput('');
    }
  }, [editTodo]);

  // Handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      // Add new todo
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput('');
    } else {
      // Update existing todo
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <>
      <NavBar />
      <div className="todo-container mt-5">
        <div className="todo-wrapper">
          <div className="header">
            <h1>Todo List</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter a Todo..."
              value={input}
              onChange={handleInputChange}
              className="task-input"
              required
            />
            <button className="button-add" type="submit">
              {editTodo ? 'OK' : 'Add'}
            </button>
          </form>
          <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
      </div>
    </>
  );
};

export default Todo;

// import React, { useState } from 'react';
// import './styles/todo.css';
// import { v4 as uuidv4 } from 'uuid';

// const Todo = () => {
//   const [input, setInput] = useState('');
//   const [todos, setTodos] = useState([]);
//   const [editId, setEditId] = useState(null);

//   // Handle input change
//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editId) {
//       const updatedTodos = todos.map((todo) =>
//         todo.id === editId ? { ...todo, title: input } : todo
//       );
//       setTodos(updatedTodos);
//       setEditId(null);
//     } else {
//       setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
//     }
//     setInput('');
//   };

//   // Handle complete toggle
//   const handleComplete = (id) => {
//     const updatedTodos = todos.map((todo) =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     );
//     setTodos(updatedTodos);
//   };

//   // Handle edit
//   const handleEdit = (id) => {
//     const todoToEdit = todos.find((todo) => todo.id === id);
//     setInput(todoToEdit.title);
//     setEditId(id);
//   };

//   // Handle delete
//   const handleDelete = (id) => {
//     const updatedTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div className="todo-container">
//       <div className="todo-wrapper">
//         <h1>Todo List</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={input}
//             onChange={handleInputChange}
//             placeholder="Enter a Todo..."
//             required
//             className="task-input"
//           />
//           <button type="submit" className="button-add">
//             {editId ? 'Update' : 'Add'}
//           </button>
//         </form>
//         <ul>
//           {todos.map((todo) => (
//             <li key={todo.id} className={`list-item ${todo.completed ? 'todo-complete' : ''}`}>
//               {todo.title}
//               <div>
//                 <button onClick={() => handleComplete(todo.id)} className="button-complete">
//                   {todo.completed ? 'Undo' : 'Complete'}
//                 </button>
//                 <button onClick={() => handleEdit(todo.id)} className="button-edit">
//                   Edit
//                 </button>
//                 <button onClick={() => handleDelete(todo.id)} className="button-delete">
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Todo;

