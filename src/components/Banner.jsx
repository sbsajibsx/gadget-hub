import { Link, useLocation } from "react-router-dom";
import bannerImg from "../assets/banner.jpg"

const Banner = () => {
  const location = useLocation();
  return (
    <div className="relative">
      <div className="hero pb-60">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="py-6">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            {
              location.pathname === '/'? <Link to="/dashboard" className="btn btn-sm rounded-3xl">Shop Now</Link> : ''
            }
          </div>
        </div>
      </div>
      <div className="p-4 border rounded-xl bg-transparent absolute -bottom-2/4">
            <div>
              <img className="w-auto h-[450px] rounded-xl" src={bannerImg} alt="" />
            </div>
      </div>
    </div>
  );
};

export default Banner;
