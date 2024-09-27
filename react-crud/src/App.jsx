import React from 'react'
import Index from './assets/pages/Index'
import Services from './assets/pages/home/Services'
import About from './assets/pages/home/About'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './assets/pages/home/Home'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Index/>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/services',
          element: <Services />
        },
        {
          path: '/about',
          element: <About />
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App