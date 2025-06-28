import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'

import Overview from './pages/overview.jsx'
import ProductPage from './pages/products.jsx'
import Sidebar from './components/global/sidebar.jsx'
import Analytics from './pages/Analytics.jsx'
import Users from './pages/Users.jsx'
import Orders from './pages/Orders.jsx'
import Settings from './pages/Settings.jsx'
import Sales from './pages/sales.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Overview />
   
  },
   {
    path: "/products",
    element: <ProductPage />
   
  },
   {
    path: "/analytics",
    element:< Analytics />
   
  },
   {
    path: "/users",
    element: <Users />
   
  },
   {
    path: "/orders",
    element: <Orders />
   
  },
   {
    path: "/settings",
    element: <Settings />
   
  },
   {
    path: "/sales",
    element: <Sales />
   
  },
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <RouterProvider router= {router} />
    
  
  </StrictMode>,
)
