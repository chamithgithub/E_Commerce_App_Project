import { BrowserRouter,Route,RouterProvider,Routes, createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import User from '../user/User'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import UserProtected from './UserProtected'

const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout />,
    children:[
    {
      index: true,
      element: <Home />
    },
    {
      element:<UserProtected />,
      children:[
        {
          path:'user',
          element:<User />,
        },
      ],
    },
  ],
  },
  {
    path:'/login',
    element:<Login />
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};
                                        
export default AppRouter;