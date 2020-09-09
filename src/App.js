import React, { useState } from 'react';
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([])
  return (
  <>
   <TodoList />
   <input type="text"/>
   <button>Add Todo</button>
   <button>Clear Completed Todos</button>
   <div>Remaining Todos: 0</div>
  </>
  )
}

export default App;
