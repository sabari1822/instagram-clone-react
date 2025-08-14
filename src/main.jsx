
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import logo from './assets/logo.png'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ViewStory from './ViewStory.jsx'
import Profile from './Profile.jsx'

const favicon = document.querySelector("link[rel='icon']") || document.createElement("link")
favicon.rel = "icon"
favicon.type = "image/png"
favicon.href = logo
document.head.appendChild(favicon)
const roouter= createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/story/:id/:tot',
      element:<ViewStory/>
    },
    {
      path:'/profile',
      element:<Profile></Profile>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={roouter}/>
 
)
