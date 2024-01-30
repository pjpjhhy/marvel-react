import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './routes/MainPage.jsx'
import NotFound from './routes/Notfound.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'


const router = createBrowserRouter([
  {
    path: "/", 
    element: <Outlet />,
    errorElement: <NotFound/>,
    children: [
      {
        path: "", 
        element: <MainPage />
      }
    ]
  }
])

const  queryClient = new QueryClient

ReactDOM.createRoot(document.getElementById('root')).render(

    <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
    </QueryClientProvider>

)
