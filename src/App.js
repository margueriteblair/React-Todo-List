import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import uuidv4 from "uuid/v4"

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef();
  const localStorageKey = 'todoApp.todos'

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
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
