import React, { useState, useRef, useEffect } from 'react';
//all of the above in the deconstructed object are React hooks
import TodoList from './TodoList'
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = 'todoApp.todos'
//local storage defined so that the todos don't just go away after we leave the page
function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  const today = new Date()

  return (
    <div style={{textAlign: "center"}}>
      <h1 style={{fontFamily: "Arial"}}>Margie's {`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`} Todo List:</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Complete</button>
      <div style={{color: "red", marginTop: 25, fontFamily: "Arial"}}>{todos.filter(todo => !todo.complete).length} tasks left to do.</div>
    </div>
  )
}

export default App;