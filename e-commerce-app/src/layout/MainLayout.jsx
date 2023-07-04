
import { Outlet } from "react-router-dom";
import Footer from "../component/footer/Footer"
import Header from "../component/header/Header"

const MainLayout = () => {
  return (
    <div  className="overflow-hidden w-screen h-screen">
    <Header />
    <Outlet />
    <Footer />
    </div>
  );
};

export default MainLayout;
