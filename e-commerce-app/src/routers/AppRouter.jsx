import { BrowserRouter,Route,Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import User from '../user/User'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import UserProtected from './UserProtected'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route element={<UserProtected />}>     
          <Route path="user" element={<User />} />
        </Route>
      </Route>
      <Route path="/login" >
        <Route index element={<Login />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
};
                                        
export default AppRouter;