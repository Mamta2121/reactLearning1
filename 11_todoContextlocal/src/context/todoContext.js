import {createContext, useContext} from 'react'


export const todoContext = createContext({
  todo:[
    {
       id: 1,
       todo: " Todo Message",
       completed: false,
    }
  ],
  
  //It's a function only without the actual code of the functionality
  addTodo: (todo) => {},
  updatedTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}
  
  
})

export const useTodo = () => {
  return useContext(todoContext)
}

export const Todoprovider = todoContext.Provider