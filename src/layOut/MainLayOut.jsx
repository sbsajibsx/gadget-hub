import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";


const MainLayOut = () => {
    return (
        <div>
            {/* header */}
            <div className="bg-slate-100"><Header></Header></div>
            {/* main */}
            <div className="bg-slate-100"><Outlet></Outlet></div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;