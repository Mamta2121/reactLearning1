import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'

import Home from './components/Home/Home.jsx'

import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'


//#1 way to do routing
/*
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
         path: "about", //defining url
         element: <About /> //giving the component to be rendered
      },
      {
        path: "contactUs",
        element: <ContactUs/>
      }
    ]
  }
])
*/

//#2 way to do routing

const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path = '/' element = {<Layout />}>
        <Route path = '' element = { <Home />}/>
        <Route  path = 'about' element = { <About />}/>
        <Route  path = 'contactUs' element = { <ContactUs />}/>
        <Route  path = 'user/:userId' element = { <User />}/>
        <Route  path = 'github' element = { <Github />}/>
     </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router = {router}/>
  </StrictMode>,
)