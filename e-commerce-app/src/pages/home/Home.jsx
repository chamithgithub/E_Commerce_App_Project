import Ads from "./Ads";
import Product from "./Product";


const Home = () => {
  return (
    <div className="px5 py-[100px] w-full h-screen overflow-y-scroll">
      <Ads />
      <Product />
    </div>
  )
}

export default Home
