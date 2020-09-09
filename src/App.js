import React, { useState } from 'react';
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  return (
  <>
   <TodoList todos={todos}/>
   <input type="text"/>
   <button>Add Todo</button>
   <button>Clear Completed Todos</button>
   <div>Remaining Todos: 0</div>
  </>
  )
}

export default App;
