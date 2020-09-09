import React, { useState, useRef } from 'react';
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef();
  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === "") return 
    console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, {id: 1, name: name, complete: false}]
    })
    todoNameRef.current.value = null //clears out input after we submit
  }
  return (
  <>
   <TodoList todos={todos}/>
   <input type="text"/>
   <button onClick={handleAddTodo}>Add Todo</button>
   <button>Clear Completed Todos</button>
   <div>Remaining Todos: 0</div>
  </>
  )
}

export default App;
