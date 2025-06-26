import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'

import Overview from './pages/overview.jsx'
import ProductPage from './pages/products.jsx'
import Sidebar from './components/global/sidebar.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Overview />
   
  },
   {
    path: "/products",
    element: <ProductPage />
   
  },
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <RouterProvider router= {router} />
    
  
  </StrictMode>,
)
