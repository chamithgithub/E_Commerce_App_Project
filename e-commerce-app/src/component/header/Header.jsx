import cart from "../../img/cart-svgrepo-com.svg";
import menu from "../../img/menu-svgrepo-com.svg";
import search from "../../img/search-svgrepo-com.svg";

const Header = () => {
  return <header className=" w-full p-5 bg-[#efc3c3]" >
      {/* header left*/}
        <div>
        <img src={menu} alt="menu"/>
        <h1>Chamith <span>Dev</span></h1>
       <div>
        <input type="text" placeholder="Search"/>
        <img src={search} alt="search"/>
       </div>
       </div>
      {/* header right*/}
      <img src={cart} alt="cart"/>
    </header>;
};

export default Header;
