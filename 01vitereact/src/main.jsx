import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


/* => for this customRendering must be done
const ReactElementCustom = {
  type: 'a',
  props:{
    href:"https://google.com",
    target: '_blank'
  },
  children: 'Click me to visit Google'
}
*/

//render method of React 
//accept this

//injecting variables(javascript)

const anotherUser = "MAMTA RAJERA";

const ReactElement = React.createElement(
  'a', //1. tag
  { href: 'https://google.com', target: '_blank'}, //2. Object =>html attributes (if no attribute leave it empty , but keep it always)
  'click me to visit google', //3. Text
  anotherUser //injecting variable
)

//or this
const anotherElement = (
  <a href = "https://google.com" target = '_blank'>Visit Google</a>
)

//or this
function FuncComp(){
  return <a href = "https://google.com" target = '_blank'>Visit Google Google</a>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  //<App/>
  //<FuncComp/>
   //funcComp()
  //anotherElement
  ReactElement
)
