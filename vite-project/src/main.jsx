import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>hola</div>,
  },
  {
    path: '/category/:id',
    element: <div>hola</div>,
  },
  {
    path: '/item/:id',
    element: <div>hola</div>,
  },
  {
    path: '/cart',
    element: <div>hola</div>,
  },
  {
    path: '/checkout',
    element: <div>hola</div>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
