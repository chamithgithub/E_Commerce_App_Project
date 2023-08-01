
import { Outlet } from "react-router-dom";
import Footer from "../component/footer/Footer"
import Header from "../component/header/Header"
import Home from "../pages/home/Home";
import Ads from "../pages/home/Ads";

const MainLayout = () => {
  return (
    <div  className="overflow-hidden w-screen h-screen">
    <Header />
    <Home />
    <Ads />
    <Outlet />
    <Footer />
    </div>
  );
};

export default MainLayout;
