import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Missing from './pages/Missing.jsx'
import FriendsPage from './pages/MainPage/FriendsPage.jsx'
import ChatPage from './pages/MainPage/ChatPage/ChatPage.jsx'
import ShoppingPage from './pages/MainPage/ShoppingPage.jsx'
import MorePage from './pages/MainPage/MorePage.jsx'
import ChatRoom from './pages/MainPage/ChatPage/ChatRoom.jsx'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<NavBar />,
    errorElement:<Missing />,
    children:[
      {
        index:true,
        element:<FriendsPage />
      }, 
      {
        path:"chat",
        element:<ChatPage />
      }, 
      {
        path:"shopping",
        element:<ShoppingPage />
      }, 
      {
        path:"more",
        element:<MorePage />
      }
    ]
  },
  {
    path:'chat/:chatroomId',
    element:<ChatRoom />
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
