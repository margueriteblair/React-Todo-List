import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import uuidv4 from "uuid/v4"

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef();
  const localStorageKey = 'todoApp.todos'

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(localStorageKey))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos))
  }, [todos])


  //use effect is used to actually save data
  function toggleTodo(id) {
    const newTodos = [...todos] //creating a copy, we don't want to mod the state variable
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete //assign todo.complete status to just be the opposite
    setTodos(newTodos);
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
  return (
  <>
   <TodoList todos={todos} toggleTodo = {toggleTodo}/>
   <input type="text"/>
   <button onClick={handleAddTodo}>Add Todo</button>
   <button >Clear Completed Todos</button>
  <div>Remaining Todos: {todos.filter(todo => !todo.complete).length}</div>
  </>
  )
}

export default App;
