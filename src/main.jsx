import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {path: `/`, element:  <Navigate to={'/doc/26158-04.02.2024-HRo8vDM'}/>},
  {path: '/doc/26158-04.02.2024-HRo8vDM', element: <App/>},
  {path: '*', element: <></>},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
