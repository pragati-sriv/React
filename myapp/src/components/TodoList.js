import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleStatus } from './todoReducer';

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        name: inputValue,
        id: Date.now().toString(),
        status: 'pending',
      };
      dispatch(addTodo(newTodo));
      setInputValue('');
    }
  };

  const handleToggleStatus = (todoId) => {
    dispatch(toggleStatus(todoId));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name} - {todo.status}
            <button onClick={() => handleToggleStatus(todo.id)}>Toggle Status</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
