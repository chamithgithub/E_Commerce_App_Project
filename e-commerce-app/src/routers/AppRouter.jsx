import { BrowserRouter,Route,Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import User from '../user/User'
import Home from '../pages/Home/Home'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="user" element={<User/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;