import { useLocation } from "react-router-dom";

import NavBar from "./NavBar";
import Banner from "./Banner";


const Header = () => {
    const location = useLocation()
 
    return (
        <div className={`md:w-11/12 mx-auto mt-1 rounded-xl ${location.pathname === '/'? 'bg-[#9538E2] text-white' : ''}`}>
            {/* navbar */}
            <NavBar></NavBar>
            {
                location.pathname === '/'? <Banner></Banner> : ''
            }
            
            
        </div>
    );
};

export default Header;