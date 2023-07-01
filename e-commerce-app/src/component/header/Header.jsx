import cart from "../../img/cart-svgrepo-com.svg";
import menu from "../../img/menu-svgrepo-com.svg";
import search from "../../img/search-svgrepo-com.svg";

const Header = () => {
  return <header className="fixed top-0 z-[100] left-0 w-full p-5 bg-[#efc3c3] flex items-center justify-between drop-shadow-header-shadow" >
      {/* header left*/}
        <div className="flex items-center">
        <img src={menu} alt="menu" className="w-6 h-6 object-contain cursor-pointer" />
        <h1 className="ml-2 text-sm font-semibold">Chamith <span className="text-[#ff2727]">Dev</span></h1>   
       <div className="overflow-hidden ml-2 flex items-center rounded-full bg-[#e6dfd7]">
        <input type="text" placeholder="Search" className="outline-none ml-1 p-2 w-[200px] bg-inherit font-semibold text-sm"/>
        <img src={search} alt="search" className="w-6 mr-2 h-6 object-contain cursor-pointer"/>
       </div>
       </div>
      {/* header right*/}
      <img src={cart} alt="cart" className="w-6 h-6 object-contain cursor-pointer"/>
    </header>;
};

export default Header;
