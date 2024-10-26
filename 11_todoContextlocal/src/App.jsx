import React, {useState, useEffect} from 'react'
import { Todoprovider } from './context/todoContext';
import { TodoItem , TodoForm} from './components';
function App() {
  
  //todos holds list of all todo items
  const [todos, setTodos] = useState([]); //by default value will be empty array 

  //all functionalities stated in context will be defined here in app.jsx 

  const addTodo = (todo) => {

    setTodos((prev) => [...prev, { id: Date.now(), ...todo}]) //sab se spread the todos array, then append the new todo , with id as the timestamp
    

  }

  //update krne ke liye id is needed and a new todo 
  //map over every todo item from todos 
  //check for the current todoa and update it
  const updatedTodo = (id, todo) => {
     setTodos( (prev) => prev.map((prevTodo)=> (
         prevTodo.id === id ? todo : prevTodo
     )

     ))
  }

  //it uses filter to exclude based on condition
  //If condition is true, Include
  //If condition is false, Exclude
  //so the todo which has to be removed will have this conditon todo.id !== id will be false and hence it will be removed from the lit of todos , called todos
  const deleteTodo = (id) => {
       setTodos ((prev) => prev.filter((todo)=> (
          todo.id !== id
       )))
  }

  //It just inverts the completed status 
  //...prevtodo => this is spreading one todo item which is an object and  completed: !prevTodo.completed => this will override the value already in it 
  const toggleComplete = (id) => {
        setTodos( (prev) => prev.map( (prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}:
        prevTodo)
      ))
  }

  //This useEffect run only once , on the initial render , because it has an empty dependency array []
  useEffect ( () => {
      const todos = JSON.parse(localStorage.getItem("todos") ); // all values in local storage is present in string format..so need to convert it into JSON
      console.log(localStorage.getItem("todos"))

      if( todos  && todos.length > 0)
      {
              setTodos(todos);
      }
  }, [])
  
  //There can be more than one useEffect
  //This useEffect triggers everytime when todos changes
  useEffect( () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  
  return (
    <Todoprovider value = {{todos, addTodo, updatedTodo, deleteTodo, toggleComplete}}>
          <div className="bg-[#172842] min-h-screen py-8">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                 <div className="mb-4">
                        {/* Todo form goes here */} 
                       <TodoForm/>
                 </div>
                 <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                      {todos.map( (todo) => (
                        <div className = 'w-full' key = {todo.id}>

                          <TodoItem todo = {todo}/>

                        </div >
                      ))}  
                 </div>
             </div>
           </div>
    </Todoprovider>
  )
}

export default App
