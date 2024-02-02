import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './routes/MainPage.jsx'
import NotFound from './routes/Notfound.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import Characters from './routes/Characters.jsx'
import Comics from './routes/Comics.jsx'
import ComicDetail from './ComicDetail.jsx'
import Email from './routes/Email.jsx'


const router = createBrowserRouter([
  {
    path: "/", 
    element: <Outlet />,
    errorElement: <NotFound/>,
    children: [
      {
        path: "", 
        element: <MainPage />
      },
      {
        path: "characters", 
        element: <Characters/>
      },
      {
        path: "comics", 
        element: <Comics/>
      },
      {
        path: "comics/:id", 
        element: <ComicDetail/>
      },
      {
        path: "email", 
        element: <Email/>
      },

    ]
  }
])

const  queryClient = new QueryClient

ReactDOM.createRoot(document.getElementById('root')).render(

    <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
    </QueryClientProvider>

)
