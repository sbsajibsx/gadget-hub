import { Link, useLocation } from "react-router-dom";
import bannerImg from "../assets/banner.jpg"

const Banner = () => {
  const location = useLocation();
  return (
    <div className="md:relative">
      <div className="hero md:pb-60">
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
      <div className="p-4 border rounded-xl bg-transparent md:absolute md:-bottom-1/2 md:left-1/2 md:transform md:-translate-x-1/2">
            <div>
              <img className="w-auto md:w-[700px] lg:w-auto md:h-[400px] lg:h-[500px] rounded-xl" src={bannerImg} alt="" />
            </div>
      </div>
    </div>
  );
};

export default Banner;
